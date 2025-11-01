import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedPGs from '../components/RelatedPGs'


const Appointment = () => {
  const { PGID } = useParams()
  const { topstay, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


  const [pgInfo, setpgInfo] = useState(null)
  const [PgSlots, setPgSlots] = useState([])
  const [slotIndex, setslotIndex] = useState(0)
  const [slotTime, setslotTime] = useState('')

  const fetchPGInfo = async () => {
    const pgInfo = topstay.find(pg => pg._id === PGID)
    setpgInfo(pgInfo)
    console.log(pgInfo);
  }

  const getAvailableSlots = async () => {
    setPgSlots([])

    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date()
      currentDate.setDate(today.getDate() + i)

      // set end time to 9:00 PM
      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      // If today, start from current time (rounded up to next half-hour or 10am minimum)
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10, 0, 0, 0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // increment by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      // add slots of the day to state
      setPgSlots(prev => [...prev, timeSlots])

    }
  }


  useEffect(() => {
    fetchPGInfo()
  }, [topstay, PGID])

  useEffect(() => {

    getAvailableSlots()
  }, [pgInfo])

  useEffect(() => {
    console.log(PgSlots)
  }, [PgSlots])

  return pgInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        {/*.........PGs deatil..........*/}
        <div>

          <img className='bg-[#5f6FFF] w-full sm:max-w-72 rounded-lg ' src={pgInfo?.image} alt={pgInfo?.name} />

        </div>

        <div className='flex-1 border border-gray-400 rounded-lg px-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
          {/*.................pg info :name, degree, exprince...*/}
          <p className=' flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {pgInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="verified" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>
              {pgInfo.owner} - {pgInfo.speciality}

            </p>

            <button className='py-0.5 px-2 border text-xs rounded-full'>{pgInfo.experience}</button>
          </div>

          <div>
            {/* {About PGs} */}
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{pgInfo.about}</p>
            <p className='text-gray-500 font-medium mt-4'>Rent per Month: <span className='text-gray-600 '>{currencySymbol}{pgInfo.fees} </span></p>
          </div>

        </div>
      </div>
      {/*......Booking slots......*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {PgSlots.length > 0 &&
            PgSlots.map((daySlots, index) =>
              daySlots.length > 0 ? (
                <div className={`text-center py-6 min-w-16 rounded-full border border-gray-300 cursor-pointer ${slotIndex === index
                  ? "bg-[#5f6FFF] text-white "
                  : ""
                  }`}
                  key={index}

                  onClick={() => setslotIndex(index)} // so you can select the day
                >
                  <p>{daysOfWeek[daySlots[0].datetime.getDay()]}</p>
                  <p>{daySlots[0].datetime.getDate()}</p>


                </div>
              ) : null
            )}
        </div>


        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {PgSlots.length > 0 && PgSlots[slotIndex] &&
            PgSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setslotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime
                  ? "bg-[#5f6FFF] text-white"
                  : "text-gray-400 border border-gray-300"
                  }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          }





        </div>
        <button className='bg-[#5f6FFF] text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>

      </div>

      { /*Listing Related PGs*/}
      <RelatedPGs PGID={PGID} speciality={pgInfo.speciality}/>

    </div >
  )
}

export default Appointment
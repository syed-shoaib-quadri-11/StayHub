import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Rooms = () => {

  const navigate = useNavigate()
  const { speciality } = useParams()
  const [ showFilter, setShowFilter ] = useState(false)
  const [filterStay, setFilterStay] = useState([])
  const { topstay } = useContext(AppContext)
  if (!topstay || topstay.length === 0) return <p>Loading...</p>;

  const applyFilter = () => {
    if (speciality) {
      setFilterStay(topstay.filter(doc => doc.speciality === speciality))
    } else {
      setFilterStay(topstay)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [topstay, speciality])
  return (
    <div>
      <p className='text-gray-600'>Explore Our Specialties</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 '>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? ' bg-[#5f6FFF] text-white' : ''} `} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={` flex-col text-gray-600 text-sm gap-4 ${showFilter ?'flex': 'hidden sm:flex'}`}>
          <p
            onClick={() =>
              speciality === "Verified Stay"
                ? navigate("/rooms")
                : navigate("/rooms/Verified Stay")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Verified Stay" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Verified Stays
          </p>

          <p
            onClick={() =>
              speciality === "Affordable & Flexible"
                ? navigate("/rooms")
                : navigate("/rooms/Affordable & Flexible")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Affordable & Flexible" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Affordable & Flexible
          </p>

          <p
            onClick={() =>
              speciality === "Prime Locations"
                ? navigate("/rooms")
                : navigate("/rooms/Prime%20Locations")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Prime Locations" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Prime Locations
          </p>

          <p
            onClick={() =>
              speciality === "Comfort & Amenities"
                ? navigate("/rooms")
                : navigate("/rooms/Comfort%20%26%20Amenities")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Comfort & Amenities" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Comfort & Amenities
          </p>

          <p
            onClick={() =>
              speciality === "Eco-Friendly Stays"
                ? navigate("/rooms")
                : navigate("/rooms/Eco-Friendly%20Stays")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Eco-Friendly Stays" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Eco-Friendly Stays
          </p>

          <p
            onClick={() =>
              speciality === "Pet-Friendly Options 🐾"
                ? navigate("/rooms")
                : navigate(`/rooms/${encodeURIComponent("Pet-Friendly Options 🐾")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pet-Friendly Options 🐾" ? "bg-indigo-100 text-black" : ""
              }`}
          >
            Pet-Friendly Options 🐾
          </p>

        </div>
        <div className='w-full  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-4 gap-y-6 '>{
          filterStay.map((item, index) => (
            <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-blue-50 ' src={item.image} alt="" />
              <div className='p-4'>
                <div className=' flex items-center gap-2 text-sm text-center text-green-500 '>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Avalibale</p>
                </div>

                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>

            </div>

          ))
        }</div>
      </div>
    </div>
  )
}

export default Rooms
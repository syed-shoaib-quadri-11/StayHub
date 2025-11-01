import React, { useState } from 'react'

const Login = () => {

  const [state, setstate] = useState('Sign Up')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventdDefault()
  }


  return (
    <form >
      <div className='flex flex-col  gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg md:max-w-20 '>
        <p className=' text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"} </p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to get connected with StayHub</p>
        {
          state === "Sign Up" &&  <div className='w-full'>
         <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} />
        </div>
            
          }
       
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} />
        </div>
        <button className='bg-[#5f6FFF]  text-white w-full py-2 rounded-md text-base '>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up'
            ? <p>Alredy have an account ? <span onClick={() => setstate('Login')} className='text-[#5f6FFF] underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account ? <span onClick={() => setstate('Sign Up')} className='text-[#5f6FFF] underline cursor-pointer'>Click here</span> </p>
        }

      </div>


    </form>
  )
}

export default Login
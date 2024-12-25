import React from 'react'
import { useState } from 'react'

const Login = ( {handleLogin}) => {
    const [Email, setEmail] = useState('')
        const [Pasword, setPasword] = useState('')
        
        const SubmitHandler = (e) => {
       e.preventDefault(); // Prevent page reload
       handleLogin(Email,Pasword)
       setEmail("")
       setPasword("")
        }
             
  return (
  

    <div className='flex h-screen w-screen items-center justify-center'>
        
        
        <div className='border-2 border-red-300 p-40 rounded-xl '>
            <form
             onSubmit={(e)=>{
                SubmitHandler(e)
               
             }} className='flex flex-col items-center justify-center gap-y-4'>
                <input
                 value={Email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required className='  bg-transparent outline-none rounded-full border-2 border-emerald-600 px-3 py-5 text-2xl placeholder:text-gray-500 font-semibold ' type="email" placeholder='Enter your email'
                  />
                <input 
                 value={Pasword}
                 onChange={(e)=>{
                     setPasword(e.target.value)
                 }}
                required className='  bg-transparent outline-none rounded-full border-2 border-emerald-600 px-3 py-5 text-2xl placeholder:text-gray-500 font-semibold' type="password" placeholder='Enter your password' />
                <button className=' rounded-full w-72  py-4 text-xl font-bold mt-8  bg-slate-400 text-teal-300 '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
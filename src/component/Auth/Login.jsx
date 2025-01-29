import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmai] = useState("")
    const [password , setPassword] = useState("")

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmai("")
        setPassword("")
    }
  return (
    <div className='flex items-center justify-center w-ful h-screen'>
        <div className='border-2 border-emerald-600 rounded-xl p-20 '>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center' >
                <input value={email} onChange={(e)=>{setEmai(e.target.value)}} required className='border-2 border-emerald-600  rounded-full py-3 px-5 text-xl bg-transparent  outline-none  placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald-600  rounded-full py-3 px-5 text-xl bg-transparent  outline-none  placeholder:text-gray-400 mt-5'   type="password" placeholder='Enter password' />
                <button className=' bg-emerald-600  border-none rounded-full py-3 px-28 text-xl outline-none  placeholder:text-white active:scale-95 mt-5' >Log in </button>
            </form>
        </div>
    </div>
  )
}

export default Login

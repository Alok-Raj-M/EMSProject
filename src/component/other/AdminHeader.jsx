import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const AdminHeader = (props) => {

    const logoutUser = () =>{
        localStorage.setItem('loggedInUserData' , '')
        props.changeUser('')
        // window.location.reload()
      }

  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold cursor-pointer'> Mayank Kumar🫰 </span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md active:scale-95 hover:bg-red-700 hover:text-emerald-300'>Log Out</button>
  </div>
  )
}

export default AdminHeader

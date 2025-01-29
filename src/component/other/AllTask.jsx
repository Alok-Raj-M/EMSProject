import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-45 '>

      <div className=' flex justify-between rounded mb-3 bg-red-400 py-2 px-4'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h2 className='w-1/5 text-lg font-medium'> New Task</h2>
        <h3 className='w-1/5 text-lg font-medium '>Active Task</h3>
        <h3 className='w-1/5 text-lg font-medium '>Completed Task</h3>
        <h3 className='w-1/5 text-lg font-medium'>Failed Task </h3>
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem ,idx){
          return       <div key={idx} className=' flex border-2 border-emerald-500 justify-between rounded mb-3 py-2 px-4'>
          <h2 className='w-1/5 text-lg font-medium cursor-pointer'>{elem.firstName}</h2>
          <h2 className='w-1/5 text-lg font-medium cursor-pointer text-blue-600' >{elem.taskCount.active}</h2>
          <h3 className='w-1/5 text-lg font-medium cursor-pointer text-yellow-600'>{elem.taskCount.newTask}</h3>
          <h3 className='w-1/5 text-lg font-medium cursor-pointer text-white'>{elem.taskCount.completed}</h3>
          <h3 className='w-1/5 text-lg font-medium cursor-pointer text-red-500'>{elem.taskCount.failed}</h3>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask

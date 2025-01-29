import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex w-screen  mt-10 justify-between gap-5 flex-shrink-0'>
      <div  className=' w-[30%] py-6 px-10 rounded-xl bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h2 className='text-xl font-medium'>New Task</h2>
      </div>

      <div className=' w-[30%] py-6 px-10 rounded-xl bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h2 className='text-xl font-medium'>Completed Task</h2>
      </div>

      <div className=' w-[30%] py-6 px-10 rounded-xl bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h2 className='text-xl font-medium'>Accepted Task</h2>
      </div>

      <div className=' w-[30%] py-6 px-10 rounded-xl bg-purple-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h2 className='text-xl font-medium'>Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskListNumber

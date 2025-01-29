import React from 'react'

const AcceptTask = ({data}) => {

  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl '>
         <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {data.category}</h3>
            <h4> {data.date}</h4>
        </div> 
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded hover:text-emerald-300 hover:bg-green-800 active:scale-105 '> Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded hover:text-emerald-300 active:scale-105' type="button">Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask

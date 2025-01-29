import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-blue-400 rounded-xl '>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {data.category}</h3>
            <h4>{data.date}</h4>
        </div> 
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>

        <div className='mt-4'>
          <button className =' w-2/3 bg-emerald-800 ml-11 mt-5 p-1 rounded active:scale-95'>Accept Task</button>
        </div>
   </div>
  )
}

export default NewTask

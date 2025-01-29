import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {

    const[userData , setUserData] = useContext(AuthContext)

    const [title , setTitle] = useState('')
    const [date , setDate] = useState('')
    const [taskAsign , setTaskAsign] = useState('')
    const [category , setCategory] = useState('')
    const [description , setDescription] = useState('')

    const [task,setTask] = useState({})

    const submitHandeler = (e) =>{
        e.preventDefault()
        setTask({title,date,category,description,active:false ,newTask:true,failed:false,completed:false})
        const data =userData
    

        data.forEach(function(elem){
            if(taskAsign == elem.firstName){
                elem.tasks.push(task)
                elem.taskCount.newTask = elem.taskCount.newTask+1
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        setUserData(data)
        console.log(data)
        
        setTitle('')
        setDate('')
        setTaskAsign('')
        setCategory('')
        setDescription('')
    }
  return (
      
    <div className='p-5 bg-[#1c1c1c] mt-10 rounded'>
        <form onSubmit={(e)=>{submitHandeler(e)}} className='flex flex-wrap w-full items-center justify-between'>
            <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-1'>Task Title</h3>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className=' w-2/5 text-sm py-1 px-2 1-4/5 rounded outline-none bg-transparent border-[2px] border-black mb-4' type="text"  />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-1 '>Date</h3>
                <input value={date} onChange={(e)=>{setDate(e.target.value)}} className='w-2/5 text-sm py-1 px-2 1-4/5 rounded outline-none bg-transparent border-[2px] border-black mb-4' type="date" />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5 mt-1'>Asign to</h3>
                <input value={taskAsign} onChange={(e)=>{setTaskAsign(e.target.value)}} className='w-2/5 text-sm py-1 px-2 1-4/5 rounded outline-none bg-transparent border-[2px] border-black mb-4' type="text" />
            </div>
            <div>
                <h1 className='text-sm text-gray-300 mb-0.5 mt-1'>Category</h1>
                <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='w-2/5 text-sm py-1 px-2 1-4/5 rounded outline-none bg-transparent border-[2px] border-black mb-4' type="text" />
            </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
    </div>

  )
}

export default CreateTask
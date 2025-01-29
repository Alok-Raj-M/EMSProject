import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTak from './CompleteTak'
import FailedTask from './FailedTask'

function TaskList({data}) {

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex flex-nowrap items-center justify-start gap-5   w-screen py-5 mt-10 '>
      {data.tasks.map((elem , idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTak key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList

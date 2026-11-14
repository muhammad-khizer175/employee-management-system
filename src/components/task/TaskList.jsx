import React from 'react'
import AcceptTask from './AcceptTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 px-6 mt-12'>
        {
          data.tasks.map((elem , idx) =>{
            if(elem.active){
              return (<AcceptTask elem={elem} key={idx} />)
            }
            else if(elem.newTask){
              return (<NewTask elem={elem} key={idx}  />)
            }
            else if(elem.completed){
              return (<CompletedTask elem={elem} key={idx}  />)
            }
            else if(elem.failed){
              return (<FailedTask elem={elem} key={idx}  />)
            }
          })
        }
      
    </div>
  )
}

export default TaskList
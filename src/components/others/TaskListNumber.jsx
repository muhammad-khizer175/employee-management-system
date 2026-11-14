import React from 'react'

const TaskListNumber = ({data}) => {

    
  return (
    <div className='flex justify-center items-center gap-4  mt-4 '>

        <div className='w-[20%] h-25 bg-blue-400 p-4 rounded-sm text-white'>
            <h3 className='text-3xl font-extrabold'>{data.taskCounts.newTask}</h3>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>

        <div className='w-[20%] h-25 bg-green-400 p-4 rounded-sm text-white'>
            <h3 className='text-3xl font-extrabold'>{data.taskCounts.completed}</h3>
            <h2 className='text-xl font-semibold'>Completed Task</h2>
        </div>

        <div className='w-[20%] h-25 bg-yellow-400 p-4 rounded-sm text-white'>
            <h3 className='text-3xl font-extrabold'>{data.taskCounts.active}</h3>
            <h2 className='text-xl font-semibold'>Accepted Task</h2>
        </div>

        <div className='w-[20%] h-25 bg-red-400 p-4 rounded-sm text-white'>
            <h3 className='text-3xl font-extrabold'>{data.taskCounts.failed}</h3>
            <h2 className='text-xl font-semibold'>Failed Task</h2>
        </div>
       
    </div>
  )
}

export default TaskListNumber
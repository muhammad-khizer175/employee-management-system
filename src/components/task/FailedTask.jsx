import React from 'react'

const FailedTask = ({elem}) => {
  return (
    <div className='w-[300px] h-[220px] bg-yellow-400 rounded-sm shrink-0 px-4 py-4'>
        <div className='flex justify-between items-center'>
          <div className="tag text-white bg-red-600 py-0.5 px-1.5 text-sm">{elem.category}</div>
          <h4 className='text-white text-sm'>{elem.taskDate}</h4>
        </div>

        <div className='mt-4'>
          <h3 className='text-white text-lg font-semibold'>{elem.taskTitle}</h3>
          <p className='text-white text-sm mt-2'>{elem.taskDescription}</p>
        </div>

        <div className='mt-9 flex justify-between items-center'>

          <button className='text-white bg-green-600 hover:bg-green-700 py-0.5 px-1.5 rounded-sm text-sm'>Mark as Completed</button>
          <button className='text-white bg-red-600 hover:bg-red-700 py-0.5 px-1.5 rounded-sm text-sm'>Mark as Failed</button>
        </div>

        
    </div>
  )
}

export default FailedTask
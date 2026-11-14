import React from 'react'
import Headers from '../others/Headers'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../task/TaskList'

const EmployeeDashboard = ({changeUser , data}) => {
  
  return (
    <>
    <Headers changeUser={changeUser} data={data}  />

    <TaskListNumber data={data} />

    <TaskList data={data} />
    </>
  )
}

export default EmployeeDashboard
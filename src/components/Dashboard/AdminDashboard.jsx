import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser}) => {
  return (
    <>
    <Headers changeUser={changeUser} />
    <CreateTask />
    <AllTask />
    </>
  )
}

export default AdminDashboard
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  return (
    <table className='w-[90%] mx-auto my-10  bg-gray-400'>
        <thead >
            <tr >
                <th className='p-2'>Employee Name</th>
                <th >New Task</th>
                <th>Active Tasks</th>
                <th>Completed</th>
                <th>Failed</th>

            </tr>
        </thead>
        <tbody>
            {
                userData.map((emp , idx) => {
                    return (
                        <tr className="border-2 border-blue-300" key={idx}>
                            <td className=' text-center p-1'>{emp.firstName}</td>
                            <td className=' text-center'>{emp.taskCounts.newTask}</td>
                            <td className=' text-center'>{emp.taskCounts.active}</td>
                            <td className=' text-center'>{emp.taskCounts.completed}</td> 
                            <td className=' text-center'>{emp.taskCounts.failed}</td>
                        </tr>
                    )
                })
            }

        </tbody>


    </table>
  )
}

export default AllTask
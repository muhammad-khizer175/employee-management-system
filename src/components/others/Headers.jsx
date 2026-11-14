import React, { useState } from "react";

const Headers = ({ changeUser, data }) => {
  const username = JSON.parse(localStorage.getItem("LoggedIn"));

  const logOut = () => {
    localStorage.setItem("LoggedIn", "");
    changeUser("");

    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between bg-gray-400 p-3">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">
          {username.role === "admin" ? "Admin" : username.data.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Headers;

// const Headers = () => {

//   // const [username, setUsername] = useState('')

//   // if(!data){
//   //   setUsername('Admin')
//   // }else{
//   //   setUsername(data.firstName)
//   // }

//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
//         <button  className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   )
// }

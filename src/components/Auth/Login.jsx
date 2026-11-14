import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    handleLogin(email,password)
    
  }

  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-teal-700 text-2xl pb-3">Login</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col border-2 border-teal-700">
        <input
          className="border-2 border-teal-700 m-5 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <input
          className="border-2 border-teal-700 m-5 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />

        <button className=" bg-teal-700 m-5 p-2 cursor-pointer">Login</button>
      </form>
    </div>
  );
};

export default Login;

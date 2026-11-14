import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  

//   console.log(userData);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const [userData, setUserData] = useContext(AuthContext);

  const handleSubmit = (e) => {

    e.preventDefault();
    
    setNewTask({
      active: false,
      category,
      completed: false,
      failed: false,
      newTask: true,
      taskDate,
      taskDescription: description,
      taskTitle,
    });

    const users = userData

    // console.log(users);

    users.forEach((u) =>{
      if(u.firstName === assignTo){
         u.tasks.push(newTask)
         u.taskCounts.newTask = u.taskCounts.newTask + 1;
      }
    })

    setUserData(users)

    console.log("users: " ,users);
    console.log("userData: ",userData);

    // line added that is not in ems project
    localStorage.setItem("employees", JSON.stringify(users));

    


    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" mx-10 h-[70vh] flex mt-6 bg-gray-400"
    >
      <div className="left  w-[50%] flex items-center mx-4">
        <div className="inner-left   w-[90%] h-[90%] flex flex-col gap-4">
          <div className="taskInfo flex flex-col ">
            <label>Task Title</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border-2 border-blue-300 p-1.5 outline-none"
              placeholder="Make a UI design"
            />
          </div>
          <div className="taskInfo flex flex-col ">
            <label>Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="border-2 border-blue-300 p-1.5 outline-none"
            />
          </div>
          <div className="taskInfo flex flex-col ">
            <label>Assign to</label>
            <input
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="border-2 border-blue-300 p-1.5 outline-none"
              placeholder="employee name"
            />
          </div>
          <div className="taskInfo flex flex-col ">
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-blue-300 p-1.5 outline-none"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
      </div>
      <div className="right  w-[50%]">
        <div className="inner-right h-full  flex flex-col gap-3 p-5">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[90%] h-[70%] p-3 border-2 border-blue-300 outline-none"
          ></textarea>
          <button className="bg-blue-500 text-white w-[90%] p-2  hover:bg-blue-600">
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedUser = localStorage.getItem("LoggedIn");

    if (loggedUser) {
      const userData = JSON.parse(loggedUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("LoggedIn", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password,
      );

      if (employee) {
        setUser("employee");

        setLoggedInUserData(employee);

        localStorage.setItem(
          "LoggedIn",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

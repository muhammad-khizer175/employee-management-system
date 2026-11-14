import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // comments out below line so that task can be seen in employee account b/c this line overrides local storage
    setLocalStorage();

    const { employees } = getLocalStorage();
    setUserData(JSON.parse(employees));

    
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const[isLogin, setIsLogin] =  useState(false);
    const [data, setData] = useState({})

    if(localStorage.getItem('login')){
      isLogin(true)
      setData.JSON.parse(localStorage.getItem('datas'))
    }
 
  const GlobalState = {isLogin, setIsLogin};
  return (
    <GlobalContext.Provider value={GlobalState}>
      {children}
    </GlobalContext.Provider>
  );
};

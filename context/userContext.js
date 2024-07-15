"use client"
const { createContext, useState, useContext, useEffect, useMemo } = require("react");

const userContext=createContext();

export function AppWrapepr({children}){
    const[user,setUser]=useState({adminType:"",haveLogin:false});
    const userData=useMemo(()=>{
        return [user,setUser]
    },[user,setUser])
    return(
        <userContext.Provider value={userData}>
            {children}
        </userContext.Provider>
    )
}

export function userAppContext(){
    return useContext(userContext);
}
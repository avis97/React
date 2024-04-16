import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Submit() {
    const [userData,setUserData]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:8080/getAllUser")
      .then((res)=>{
        setUserData(res.data)
      })
    },[])
    return (
      <>
       <div>{userData.map((name)=>{
            return (
              <h1>{name.firstName}</h1>
            )
       })}</div>
      </>
    )
}

export default Submit

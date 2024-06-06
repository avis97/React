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
       <div>{userData.map((item)=><h1>{item.firstName +" "+item.lastName + item.age}</h1>)}
       </div>
      </>
    )
}

export default Submit

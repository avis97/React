import axios from 'axios';
import React, { useState } from 'react'


function PostUser(){
  const user={
    firstName:"",
    lastName:"",
    age:0
  }
  const [userData,setUserData]=useState(user);

  const onSubmit=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value});
  }
  const submitFrom=(e)=>[
    e.preventDefault(),
    axios.post("http://localhost:8080/adduser",userData).then((res)=>{
        console.log(res);
    })
  ]
  return (
    <div > 
      <form>
        <label htmlFor="First Name">First Name</label>
        <input type='text' name='firstName' value={userData.firstName} onChange={onSubmit}></input><br/>
        <label htmlFor="First Name">Last Name</label>
        <input type='text' name='lastName' value={userData.lastName} onChange={onSubmit}></input><br/>
        <label htmlFor="First Name">Yous Age</label>
        <input type='number' name='age' value={userData.age} onChange={onSubmit}></input><br/>
        <button onClick={submitFrom}>Submit New User</button>
      </form>
    </div>
  )
}

export default PostUser

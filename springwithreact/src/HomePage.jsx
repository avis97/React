import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function HomePage() {
  const navigate=useNavigate();
  return (
    <div>
      <h1>This is our Home Page</h1>
      <button onClick={()=>(navigate("/viewuser"))}>ClickMe</button>
      <Link to={"/submituser"}><h1>Add New User</h1></Link>
    </div>
  )
}

export default HomePage

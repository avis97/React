import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <h1>This is our Home Page</h1>
      <Link to={"/viewuser"}><h1>view user</h1></Link>
      <Link to={"/submituser"}><h1>Add New User</h1></Link>
    </div>
  )
}

export default HomePage

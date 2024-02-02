import React from 'react'
import { Link } from 'react-router-dom'
const MainPage = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={"/about"}>About</Link>
        <h2>Main Page</h2>
    </div>
  )
}

export default MainPage
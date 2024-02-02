import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LinkLayouts = () => {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/main'}>Main</Link>
        <Link to={"/about"}>About</Link>

        <Outlet />
    </div>
  )
}

export default LinkLayouts
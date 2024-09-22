import React from 'react'
// import Home from '.Components/Home'
// import About from '.Components/About'
// import Dashbord from '.Components/Dashbord'

import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/" className={({isActive}) => isActive ? "Active-link" : ""}> Home</NavLink>
        </li>

        <li>
            <NavLink to="/about" className={({isActive}) => isActive ? "Active-link" : ""} > About</NavLink>
        </li>

        <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "Active-link" : ""}> DashBoard</NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Navbar

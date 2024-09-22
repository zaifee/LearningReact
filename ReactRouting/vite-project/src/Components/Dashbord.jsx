import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashbord = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
  return (
    <div>
      DashBorad
      <button onClick={handleClick}>
        Move to Home page
      </button>
      <Outlet />
    </div>
  )
}

export default Dashbord

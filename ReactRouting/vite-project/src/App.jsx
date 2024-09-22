import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'

import Dashbord from './Components/Dashbord'
import Navbar from './Components/Navbar'
import ParamsCom from './Components/ParamsCom'
// import Courses from '.Components/Courses' 
import Courses from "./Components/Courses";

import Report from './Components/Report'
import Test from './Components/test'
import About from './Components/about'
import NotFound from './Components/NotFound'

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <div>
       <Navbar />
       <Home />
    </div>
  },

  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>
    
    
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar />
      <Dashbord />
    
    </div>,
    children: [
      {
        path: 'courses',
        element: <Courses />
      },
      {
        path: 'test',
        element: <Test />
      },

      {
        path: 'report',
        element: <Report />
      },

     
    ]

  },
  {
    path: "/student/:id",
    element: <div>
      <Navbar />
      {/* Params */}

      <ParamsCom />
    </div>
  },
  
  {
    path: "*",
    element: <NotFound />
  }
 
]

)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <RouterProvider router={router} />  
    </div>

    </>
    
  )
  
}
export default App

import { useState } from 'react'

import './App.css'

import {createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Root from "./routes/layout/RootLayout"
import Error from './routes/error/Error'
import Admin from './components/admin/Admin'
import Blog from './components/admin/adminRoutes/Blogs'
import Projects from './components/admin/adminRoutes/Projects'
import Others from './components/admin/adminRoutes/others'
import AdminError from './components/admin/adminComponent/AdminError'
import Layout from './routes/layout/Layout'
import BlogRoute from './routes/blog/Blog'
import ProjectsRoute from './routes/projects/projects'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Root/>
      },
      {
        path:"/blogs",
        element:<BlogRoute/>
      },
      {
        path:"/projects",
        element:<ProjectsRoute/>
      }
    ]
    
  },
  {
    path:"/api/admin",
    element:<Admin/>,
    errorElement:<AdminError/>,
    children:[
      {
        path:"/api/admin/blogs",
        element:<Blog/>,
      },
      {
        path:"/api/admin/projects",
        element:<Projects/>
      },
      {
        path:"/api/admin/others",
        element:<Others/>
      }
    ]
  }
])

function App() {

  return (
    <>
      
      <div className=''>
            <RouterProvider router={router} />
          
      </div>

    </>
  )
}

export default App

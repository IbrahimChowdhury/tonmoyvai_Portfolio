import React from 'react'
import AdminHeader from './adminComponent/Navbar'
import {Outlet} from 'react-router-dom'
const Admin = () => {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
    </div>
  )
}

export default Admin
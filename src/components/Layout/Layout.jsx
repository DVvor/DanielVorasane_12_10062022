import React from 'react'
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import './Layout.css'

import { Outlet } from 'react-router-dom'


function Layout() {
  
  return (
  <>

    <Header />
    <main className='main'>
    <Sidebar />
    <Outlet />
    </main>
    
  </>
  )

}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar';
import TopBar from './TopBar';

const SidebarLayout = () => {
    return (
    <div style={{ display: 'flex', minHeight: '100vh'}}>
      <Sidebar />
      <main className='content' style={{ flexGrow: 1 }}>
        <TopBar/>
        <Outlet />
      </main>
    </div>
    )
}

export default SidebarLayout
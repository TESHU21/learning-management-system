import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
  return (
    <div className=' flex flex-col min-h-screen'>
    <Navbar/>
    <main className='  flex-grow'>
        <Outlet/>
        <Toaster position="top-right" className="px-2 py-2" />

        
    </main>
    <Footer/>

    </div>
  )
}

export default Layout
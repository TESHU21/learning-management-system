import React from 'react'
import AzubiLogo from "../assets/images/azubi-logo.png"
import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import{LogIn} from "lucide-react"


const Navbar = () => {
  return (
    <div >
        {/* Desktop Menu */}
        <div className=" hidden md:flex  justify-between px-[201px]  h-[80px] items-center bg-white ">
        <div className=' flex items-center gap-8   '>
            <div>
                <img src={AzubiLogo} alt="Azubi Logo" className='h-10 w-auto' />
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
        </div>
        <div className=" flex gap-6">
            <Button className="py-3 px-6 bg-white  hover:bg-white text-base leading-6 font-semibold text-blue-primary border rounded-md border-blue-primary">Login <span className='ml-3'><LogIn size={22}/></span></Button>
            <Button className="py-3 px-6 bg-blue-primary  text-base leading-6 font-semibold text-white border rounded-md border-blue-primary">sign up <span className='ml-3'><LogIn size={22}/></span></Button>

        </div>
        </div>
        {/* Mobile Menu */}
    </div>
  )
}

export default Navbar
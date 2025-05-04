import React from 'react'
import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc"; // "fc" = Flat Color icons


const GoogleLoginButton = () => {
    const handleClick=()=>{
        console.log("'Button Clicked")
    }
  return (
    <div>
    <Button onClick={handleClick} className=" flex items-center bg-white hover:bg-white border border-blue-primary  w-full h-12 py-3 px-6 cursor-pointer"> <FcGoogle className='w-[22px] h-[22px]'/> <span className='text-blue-primary'>Log in using Google</span></Button>

    </div>
  )
}

export default GoogleLoginButton
import React from 'react'
import { Button } from './ui/button'

const GoogleLoginButton = () => {
  return (
    <div>
    <Button className=" flex items-center bg-white hover:bg-white border border-blue-primary  w-full h-12 py-3 px-6"> <FcGoogle className='w-[22px] h-[22px]'/> <span className='text-blue-primary'>Log in using Google</span></Button>

    </div>
  )
}

export default GoogleLoginButton
import React from 'react'
import {SignUpSchema,fields,initialValues} from "./components/data"
import FormComp from '@/components/FormComp'
import { FcGoogle } from "react-icons/fc"; // "fc" = Flat Color icons
import { Button } from '@/components/ui/button';
import LoginImage from "../../assets/svg/Ellipse 32.svg"
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate=useNavigate()
  return (
    <div className=' flex justify-center pb-10 md:pb-[300px]'>
    <div className='flex justify-center items-center gap-[49px]'>
        <div className='hidden md:flex'>
            <img src={LoginImage} alt="Work desk with laptop, documents, coffee, and cactus plant" />
            </div>
    <div className=' w-full md:w-[500px]  p-6'>
        <h3 className='w-full md:w-[419px] text-center font-lato font-bold leading-10 md:leading-12 md:text-[40px] mt-[73px] mb-[49px]'>Sign up to get started</h3>
        <div className=" flex flex-col  gap-6 md:w-[431px]">
        <Button className=" flex items-center bg-white hover:bg-white border border-blue-primary  w-full h-12 py-3 px-6"> <FcGoogle className='w-[22px] h-[22px]'/> <span className='text-blue-primary'>Sign up using Google</span></Button>
        <span className='h-6 text-center'>or</span>
           

        <FormComp schema={SignUpSchema} fields={fields} initialValues={initialValues} submitBtnText={"Sign Up"}  />
        <p className=' text-center underline decoration-blue-primary'>Already have an account ? <span className='text-blue-primary cursor-pointer' onClick={()=>navigate("/login")}>log in</span></p>

        </div>
    
    </div>

    </div>
   
    
</div>
  )
}

export default SignUp
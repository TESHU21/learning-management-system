import React from 'react'
import HeroImage from "../../../assets/svg/Ellipse 32.svg"
import {z} from "zod"
import FormComp from '@/components/FormComp'
import { LockKeyhole } from "lucide-react";


const ResetPassword = ({onNext}) => {
  const PasswordSchema = z .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must not exceed 32 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Show error on confirmPassword field
    message: "Passwords do not match",
  });
  const initialValues = {
    
    password: "",
    confirmPassword:"",
  };
   const fields = [
   
    {
      
      name: "password",
      placeholder:"New password",
      icon:LockKeyhole,
      type: "password",
      className: "col-span-2 ",
    },
    {
      name: "confirmPassword",
      placeholder:"Confirm Password",
      icon:LockKeyhole,
      type: "password",
      className: "col-span-2 ",
    },
  ];
  return (
    <div className='flex justify-center md:gap-[49px] '>
         <div className='hidden md:flex md:ml-[190px]  '>
         <img src={HeroImage} className='w-[418px] h-[418px] object-cover' alt="Work desk with laptop, documents, coffee, and cactus plant" />
           </div>
           <div className='md:w-[431px] px-4 md:px-0 py-24 '>
             <h3 className='font-lato text-center font-bold text-[28px] md:text-[40px] leading-12 mb-[15px]'>Reset password</h3>
             <p className='leading-6  text-base  font-inter mb-6'>Create a new password and get started</p>
           <FormComp schema={PasswordSchema} initialValues={initialValues} fields={fields} submitBtnText={"Reset password"}/>
           </div>
       </div>
  )
}

export default ResetPassword
import React from 'react'
import { z } from "zod";
import FormComp from '@/components/FormComp';
import HeroImage from "../../../assets/svg/Ellipse 32.svg"
import { Mail } from 'lucide-react';

const ForgotPassword = () => {
    const ForgotPasswordSchema = z.object({
        email: z.string().email({ message: "Invalid Email Adress" }),
      });
      const initialValues = { email: "" };
      const fields = [
        {
          label: "Email",
          name: "email",
          type: "email",
          icon:Mail,
          className: "col-span-2",
          placeholder: "Enter email",
        },
      ];
    
  return (
    <div className='flex justify-center md:gap-[49px] '>
      <div className='hidden md:flex md:ml-[190px]  '>
      <img src={HeroImage} className='w-[418px] h-[418px] object-cover' alt="Work desk with laptop, documents, coffee, and cactus plant" />
        </div>
        <div className='md:w-[431px] px-4 md:px-0 py-24 '>
          <h3 className='font-lato text-center font-bold text-[28px] md:text-[40px] leading-12 mb-[15px]'>Forgot password</h3>
          <p className='leading-6  text-base  font-inter mb-6'>Enter your email address to reset your password</p>
        <FormComp schema={ForgotPasswordSchema} initialValues={initialValues} fields={fields} submitBtnText={"Reset password"}/>
        </div>
    </div>
  )
}

export default ForgotPassword
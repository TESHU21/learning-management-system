import React from 'react'
import HeroImage from "../../../assets/svg/Ellipse 32.svg"
import {z} from "zod"
import FormComp from '@/components/FormComp'

export const OtpVerification = () => {
    const otpSchema = z.object({
    otp: z.string()
      .length(6, "OTP must be exactly 6 digits")
      .regex(/^\d{6}$/, "OTP must contain only numbers"),
       });
  
        const initialValues = { otp: "" };
        const fields = [
          {
            name: "otp",
            type: "otp",
            className: "col-span-2",
            placeholder: "1234",
          },
        ];
  return (
      <div className='flex justify-center md:gap-[49px] '>
         <div className='hidden md:flex md:ml-[190px]  '>
         <img src={HeroImage} className='w-[418px] h-[418px] object-cover' alt="Work desk with laptop, documents, coffee, and cactus plant" />
           </div>
           <div className='md:w-[431px] px-4 md:px-0 py-24 '>
             <h3 className='font-lato text-center font-bold text-[28px] md:text-[40px] leading-12 mb-[15px]'>OTP Verification</h3>
             <p className='leading-6  text-base  font-inter mb-6'>Verify your accounts using the six digit 
             sent to test@gmail.com</p>
           <FormComp schema={otpSchema} initialValues={initialValues} fields={fields} submitBtnText={"Reset password"}/>
           </div>
       </div>
  )
}

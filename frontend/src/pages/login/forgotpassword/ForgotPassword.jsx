import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import FormComp from '@/components/FormComp';
import HeroImage from "../../../assets/svg/Ellipse 32.svg"
import { Mail } from 'lucide-react';
import { useAuth } from '@/contexts/authContext';

const ForgotPassword = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [successMessage,setSuccessMessage]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
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
  const {forgotPassword}=useAuth()
  const navigate=useNavigate()
  const handleForgotPassword=async(data)=>{
    console.log("FFFFFFFFF",data)
    try{
      setIsLoading(true)
    const response =await forgotPassword(data)
    console.log("Response ",response)
    if(response){
      // setSuccessMessage(response.data.message)
      navigate(`/reset-password/${token}`)
      

    }
    }
    catch(error){
     setErrorMessage(error.response?.data.errors[0].message)
    
    }
    finally{
      setIsLoading(false)

    }

  }
    
  return (
    <div className='flex justify-center md:gap-[49px] '>
      <div className='hidden md:flex md:ml-[190px]  '>
      <img src={HeroImage} className='w-[418px] h-[418px] object-cover' alt="Work desk with laptop, documents, coffee, and cactus plant" />
        </div>
        <div className='md:w-[431px] px-4 md:px-0 py-24 '>
          <h3 className='font-lato text-center font-bold text-[28px] md:text-[40px] leading-12 mb-[15px]'>Forgot password</h3>
          <p className='leading-6  text-base  font-inter mb-6'>Enter your email address to reset your password</p>
        <FormComp schema={ForgotPasswordSchema} initialValues={initialValues} fields={fields} submitBtnText={"Reset password"} onSubmit={handleForgotPassword} isLoading={isLoading} successMessage={successMessage} errorMessage={errorMessage}/>
        </div>
    </div>
  )
}

export default ForgotPassword
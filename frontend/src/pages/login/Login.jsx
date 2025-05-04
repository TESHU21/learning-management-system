import React,{useState} from 'react'
import FormComp from '@/components/FormComp'
import { FcGoogle } from "react-icons/fc"; // "fc" = Flat Color icons
import { Button } from '@/components/ui/button';
import{SignInSchema,fields,initialValues} from "./components/data"
import { useNavigate } from 'react-router-dom';
import LoginImage from "../../assets/svg/Ellipse 32.svg"
import { useAuth } from '@/contexts/authContext';
const Login = () => {
  const navigate=useNavigate()
  const [isLoading,setIsLoading]=useState(false)
  const [successMessage,setSuccessMessage]=useState("")
  const [errorMessage,setErrorMessage]=useState("")
  const {signin}=useAuth()
  
  
  const handleSignIn=async(data)=>{
   
    try{
      setIsLoading(true)
      const response=await signin(data)
      if(response.status===200){
      const token=sessionStorage.getItem("Token")
      const user = sessionStorage.getItem("User");
      const userParsed = JSON.parse(user);

      
      setSuccessMessage (response.data.message)
      console.log(response.data)
      if(userParsed?.isVerified){
        navigate("/")
      }
      else{
        navigate("/verifyemail")
      }
     
    }

    
     
    }
    catch(error){
      console.log(error)
      setErrorMessage(error)
    }
    finally{
      setIsLoading(false)
    }

  }


  
  return (
    <div className=' flex justify-center pb-10 md:pb-[300px]'>
        <div className='flex justify-center items-center gap-[49px]'>
            <div className='hidden md:flex'>
                <img src={LoginImage} alt="Work desk with laptop, documents, coffee, and cactus plant" />
                </div>
        <div className=' w-full md:w-[500px]  p-6'>
            <h3 className='w-full md:w-[419px] text-center font-lato font-bold leading-10 md:leading-12 md:text-[40px] mt-[73px] mb-[49px]'>Log in to continue your learning journey</h3>
            <div className=" flex flex-col  gap-6 md:w-[431px]">
            <Button className=" flex items-center bg-white hover:bg-white border border-blue-primary  w-full h-12 py-3 px-6"> <FcGoogle className='w-[22px] h-[22px]'/> <span className='text-blue-primary'>Log in using Google</span></Button>
            <span className='h-6 text-center'>or</span>
               

            <FormComp schema={SignInSchema} fields={fields} initialValues={initialValues} submitBtnText={"Login"}  showForgotPassword ={true}  onSubmit={handleSignIn} isLoading={isLoading}/>
            <p className=' text-center underline decoration-blue-primary'>Need to create an account ? <span className='text-blue-primary cursor-pointer' onClick={()=>navigate("/signup")}>signup</span></p>
            </div>
        
        </div>

        </div>
       
        
    </div>
  )
}

export default Login
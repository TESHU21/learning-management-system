import React,{useState,useRef} from 'react'
import FormComp from '@/components/FormComp'
import {CheckoutSchema,fields,initialValues} from "./components/data"
import {ChevronRight} from "lucide-react"
import { useLocation } from "react-router-dom";
import { useCourse } from "@/contexts/CourseContext";
import Loader from '@/components/Loader';
import { toast } from "sonner"






const Checkout = () => {
  const [isLoading,setIsLoading]=useState(false)
    const [successMessage,setSuccessMessage]=useState("")
    const [errorMessage,setErrorMessage]=useState("")
    const formRef=useRef()
    const amountRef=useRef()
    const userUnparsed=sessionStorage.getItem("User")
    const user=JSON.parse(userUnparsed)
      const { selectedCourse,enrollLearnersbyTrack}=useCourse()
        const paystackCallbackUrl=window.location.href;

    
    console.log(user)
     const location = useLocation();
  
  console.log("selectedCourse",selectedCourse)
    const filterdIntialvlues={
      fullName:`${user.firstName ||""} ${user.lastName ||""} `,
      email:user.email ||"",
      
      
    course: selectedCourse.title ||"",
   
    gender:"",
    phoneNumber:user.contact || "",
    location:user.location||"",
    disabled:"",
    description:undefined,
      
    }
    // Extracting Track Id
        const track=selectedCourse?.track?.id;
    const handleCheckout=async(data)=>{
      const currentSelectedAmount=amountRef.current?.value;
      const updatedData = { ...data, selectedAmount: Number(currentSelectedAmount) ,track:track,paystackCallbackUrl:paystackCallbackUrl};

console.log(updatedData)
try{
  setIsLoading(true)
  const response=await enrollLearnersbyTrack(updatedData)
  setSuccessMessage(response.data.invoice.message)
        toast.success('Enrollment successful!');


  console.log(response)
}
catch(error){
const firstErrorMessage = error?.response?.data?.errors?.[0]?.message;
const isCompleteProfile = !!firstErrorMessage?.toLowerCase()?.includes("please complete your profile");
  if(isCompleteProfile){
       toast.error('Complete Your Profile Before Payment.');

  }
}

    }
  return (
    <div>
        <div className=' flex md:h-[175px] w-full bg-blue-primary items-center justify-center font-lato text-[40px] font-bold leading-12'>
            <h3 className=' text-white '>Checkout</h3>
        </div>
        <div className='flex gap-6 md:mx-[200px] '>
            <div className=' w-1/2 md:mt-[161px]'>
                <FormComp ref={formRef} schema={CheckoutSchema} fields={fields} initialValues={filterdIntialvlues} hideButton={true} onSubmit={handleCheckout}     isCheckoutPage ={true}/>

            </div>
            <div className=' flex-1 mt-[83px] w-[508px] px-[40px]'>
                <h3 className='  mb-[57px] font-lato font-bold text-[40px] leading-12 text-center text-[#404040]'>Complete Payment</h3>
                
      {/* Right Side: Selection + Button */}
      <div className="shadow-md px-8 pt-6 pb-12 w-full flex flex-col gap-12">
      <div className='flex flex-col  gap-[11px]'>
      <label htmlFor="amount" className="text-sm font-medium ">
          select amount
        </label>
        <select
          id="amount"
          ref={amountRef}
         
          className="border w-full h-[48px] px-3 py-2 rounded-md bg-[#F5F5F5]"
        >
          <option value="350">100 ETB</option>
          <option value="200">200 ETB</option>
          <option value="300">300ETB</option>
          <option value="350">350 ETB</option>
        </select>
      </div>
       

        <button
        className=  " flex  items-center gap-3 w-full h-[48px] rounded-md px-6 bg-blue-primary hover:bg-blue-primary text-white py-3"
          type='submit'
        onClick={() => formRef.current?.submit()}
        >
          Complete my purchase <ChevronRight size={22}/>
        </button>
      </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
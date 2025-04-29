import React from 'react'
import { solutions,steps } from './components/data'
import LaptopWithCodeImage from "../../assets/images/Laptop with Code Screen.png"
import { Button } from '@/components/ui/button'
import AuthenticationImage from "../../assets/svg/authentication.svg"
import SecureLoginImage from "../../assets/svg/secure-login.svg"
import { FaArrowDownLong } from "react-icons/fa6";




const GetStartedSection = () => {
  return (
    <div>
    {/* time to invet section */}
           <div className='  hidden md:flex relative  md:h-[222px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${LaptopWithCodeImage})` }}>
        {/* Over Lay */}
        <div className=' flex absolute inset-0  bg-[rgba(1,88,154,0.8)]'>
            <div className='flex flex-col gap-2 ml-[198px] mt-[43px] text-white'>
                <h3  className="font-lato font-bold text-[40px] leading-12">It’s time to start investing in yourself</h3>
                <p className=' text-base font-inter leading-6'>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
            </div>
            <Button className=" w-[137px]h-[137px] mt-[82px] ml-[37px] py-3 px-6 border border-white !bg-blue-primary hover:opacity-40">Get started</Button>

            
        </div>
     


    </div>
    {/* Onboarding Process */}
    
    <div className='hidden md:flex gap-6 mt-[131px] pb-[254px] mx-[150px] '>
        {/* Left Side */}
        <div className="flex flex-col gap-[80px] flex-1">
  {steps.map((step, index) => (
    <div key={step.id} className="relative">
      {/* Step Card */}
      <div className="p-6 bg-white rounded-lg shadow-lg border w-full">
        <div className="flex gap-[30px]">
          <img src={step.icon} alt="" />
          <div className="flex flex-col gap-3">
            <h5 className="font-bold font-lato leading-7">{step.title}</h5>
            <p className="font-inter text-base">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Arrow (only if not last) */}
      {index < steps.length - 1 && (
        <div className="absolute left-1/2 -bottom-[40px] transform -translate-x-1/2 translate-y-1/2 text-blue-primary z-10">
          <FaArrowDownLong className="w-[38px] h-6" />
        </div>
      )}
    </div>
  ))}
</div>

        {/* Right Side */}
        <div className=' flex-1 border shadow-lg rounded-md  '>
         
          <div className='flex pt-[63px]  pr-[56px] '>
                <div className='text-center pl-[58px] '>1 <br/> <span>Secure Login</span></div>
                <div className='text-center ml-[317px]'>2 <br/> <span>Authentication</span></div>
            </div>

            <div className=' flex ml-[27px]   '>
              <img src={SecureLoginImage} alt="Woman standing next to a secure laptop with a lock icon" className=' w-[195.5px] mt-[17px] h-[136.02px]' />
              <div className='pl-[260px] mt-[30px]   '><img src={AuthenticationImage} alt="Person standing on screen to check autenticity" />
              </div>
          
          </div>
            {/* step 3 */}
     <div className=' w-[140px] h-[45px] ml-[51px]  text-base'><
      p className='text-center'>3</p>
      <p  className=' text-center'>Choose a course</p>
      </div>
      <div className='mt-6 mx-[51px]'>
          <div className="flex gap-7 justify-center">
          {solutions.map((item) => (
            <div key={item.title} className="p-6 border shadow-lg rounded-lg   border-t-0">
              <div className="flex flex-col gap-2 w-[127.8px]">
                <img src={item.icon} alt="" className="w-[31.8px] h-[31.8px]" />
                <p className="font-semibold text-[8px]">{item.title}</p>
                <p className=' text-[6.3px] leading-[9.44px]'>{item.description}</p>
                
                  <p className='text-[7px] font-semibold text-center'>${item.price}</p>
      
              
              </div>
            </div>
          ))}
                  </div>

      </div>

         
        </div>
       
    </div>
   

  
   
    </div>
 
  )
}

export default GetStartedSection
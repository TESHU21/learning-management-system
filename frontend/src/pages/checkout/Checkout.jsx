import React,{useState,useRef} from 'react'
import FormComp from '@/components/FormComp'
import {CheckoutSchema,fields,initialValues} from "./components/data"
import {ChevronRight} from "lucide-react"


const Checkout = () => {
    const formRef=useRef()
    const [selectedAmount,setSelectedAmount]=useState("350")
  return (
    <div>
        <div className=' flex md:h-[175px] w-full bg-blue-primary items-center justify-center font-lato text-[40px] font-bold leading-12'>
            <h3 className=' text-white '>Checkout</h3>
        </div>
        <div className='flex gap-6 md:mx-[200px] '>
            <div className=' w-1/2 md:mt-[161px]'>
                <FormComp ref={formRef} schema={CheckoutSchema} fields={fields} initialValues={initialValues} hideButton={true}/>

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
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(e.target.value)}
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
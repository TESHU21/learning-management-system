import React from 'react'
import { Button } from '@/components/ui/button'
import LaptopImages from "../../../assets/images/Laptop with Code Screen.png"
import SoftwareDevImage from "../../../assets/course/Software.svg"

const Dashboard = () => {
  return (
    <div className='px-[200px]'>
        <h3 className=' text-base leading-6 font-bold'>Enrolled courses</h3>
        <div className='mt-[64px]'> 
            <h3 className='font-inter font-semibold text-[20px] leading-8'>Software Development Track</h3>
            <div className=' flex flex-col items-start  mt-[59px] shadow-md w-[242px] rounded-lg'>
                <img src={LaptopImages} alt="Course Image" className='w-[242px] h-[174px] rounded-t-lg' />
                <p className='leading-4 text-[12px] mt-[19px] text-[#404040] ml-[11px]'>React Js</p>
                <h3 className='font-semibold leading-6 text-base w-[148px] pt-3 space-y-3 ml-[11px]'>Quick Introduction to ReactJs</h3>
                <Button className=" bg-white hover:bg-white text-blue-primary mt-[54px] mb-[16px] border-0 ">Registered</Button>
                
            </div>
        </div>
        {/* Rate Us */}
        <div className='mt-[83px]'>
            <h3 className=' font-bold text-[20px] leading-8'>Rate us</h3>
            <div className=" flex my-[59px] gap-[10px] w-[508px] p-6 shadow-lg shadow-black/15  rounded-lg">
      <img src={SoftwareDevImage} alt="" className="w-[202px] h-[209.6px] object-cover" />
      <div className=" flex flex-col gap-4 mt-[40px] ">
        <p className=" font-semibold">item.name</p>
        <span className="leading-6 text-base text-justify">description</span>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Dashboard
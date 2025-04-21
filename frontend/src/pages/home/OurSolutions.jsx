import React from 'react'

import { Button } from '@/components/ui/button'
import Buttons from "../../assets/images/Frame 169157.png"
import IphoneImage from "../../assets/images/mockuuups-iphone-13-pro.png"
import MicrosoftSurface from "../../assets/images/mockuuups-microsoft-surface-studio.png"
import CapIcon from "../../assets/svg/student-cap-svgrepo-com 1.svg"
import ClockIcon from "../../assets/svg/clock-circle-svgrepo-com 1.svg"
import StudentPersonIcon from "../../assets/svg/student-person-part-2-svgrepo-com (1) 1.svg"
import {solutions} from "./components/data"







const OurSolutions = () => {

  return (
    <div>
        {/* Our Solutions */}
           <div className=' flex flex-col pt-[94px] pb-[133px] px-[190px]  gap-14'>
        <div className=' flex flex-col gap-3'>
            <h3 className=' font-lato font-bold text-[40px] leading-12 text-center'>Our solutions</h3>
            <p className=' font-inter text-center leading-6'>Create your account quickly with just your email or social media login, then explore a wide range </p>
        </div>
        <div className="flex gap-7 justify-center">
  {solutions.map((item) => (
    <div key={item.title} className="p-6 border shadow-lg rounded-lg   border-t-0">
      <div className="flex flex-col gap-4 w-[325px]">
        <img src={item.icon} alt="" className="w-[81px] h-[81px]" />
        <p className="font-semibold">{item.title}</p>
        <p>{item.description}</p>
        <div className="flex justify-between">
          <p>${item.price}</p>
          <Button className="bg-transparent shadow-none hover:bg-transparent text-blue-primary">
            preview
          </Button>
        </div>
      </div>
    </div>
  ))}
          </div>

           </div>
        {/*  What Will be our next step */}
        <div className='flex pt-8 bg-blue-primary h-[477px] rounded-md'>
            <div className='flex-1 flex flex-col gap-9 pl-[199px]'>
                <div className=' flex flex-col gap-3  w-[539px] text-white'>
                    <h3 className=' text-[40px] font-lato font-bold  leading-[1.2]'>What will be next step</h3>
                    <p className='font-inter text-base leading-6'>Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!</p>
                </div>
                <div>
                    <img src={Buttons} alt="" />
                </div>
            </div>
            {/*  */}
            <div className='  relative flex-1 flex '>
            <img src={IphoneImage} alt="Iphone Having Coding Background Image" className='mt-[182px] z-10'   />
                <img src={MicrosoftSurface} alt="Microsoft Surface Desktop Screen" className='absolute left-[47px] mt-[30px]' />
       

            </div>

        </div>
        {/* What are we proud of  */}
        <div className="mt-[84px] pb-[95px]">
  {/* Header */}
  <div className="px-[179px] flex flex-col gap-3 text-center">
    <h3 className="font-lato text-[40px] leading-12 font-bold">We are proud</h3>
    <p className="font-inter text-base leading-6">
      We take pride in our achievements and commitment to excellence. Join us in celebrating innovation, growth, and success.
    </p>
  </div>

  {/* Stats Section */}
  <div className="flex justify-center items-stretch gap-[120px] px-[276px] mt-[62px]">
    {/* Stat 1 */}
    <div className="flex flex-col items-center justify-between text-center h-[184px]">
      <img src={StudentPersonIcon} alt="Student Person Icon" className="w-[80px] h-[80px]" />
      <h1 className="font-lato font-bold text-[60px] leading-[70px] text-blue-primary">4+</h1>
      <p className="leading-[32px] font-semibold font-inter">Courses</p>
    </div>

    {/* Divider */}
    <div className="w-px h-[148px] bg-[#679BC2]"></div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center justify-between text-center h-[184px]">
      <img src={CapIcon} alt="Graduation Cap Icon" className="w-[81px] h-[81px]" />
      <h1 className="font-lato font-bold text-[60px] leading-[70px] text-blue-primary">200+</h1>
      <p className="leading-[32px] font-semibold font-inter">Course students</p>
    </div>

    {/* Divider */}
    <div className="w-[1.2px] h-[148px] bg-[#679BC2]"></div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center justify-between text-center h-[184px]">
      <img src={ClockIcon} alt="Clock Icon" className="w-[80px] h-[84px]" />
      <h1 className="font-lato font-bold text-[60px] leading-[70px] text-blue-primary">250+</h1>
      <p className="leading-[32px] font-semibold font-inter">Hours of content</p>
    </div>
  </div>
</div>

   
    </div>
 
  )
}

export default OurSolutions
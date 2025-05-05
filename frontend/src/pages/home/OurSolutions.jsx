import React from 'react'

import { Button } from '@/components/ui/button'
import Buttons from "../../assets/images/Frame 169157.png"
import IphoneImage from "../../assets/images/mockuuups-iphone-13-pro.png"
import MicrosoftSurface from "../../assets/images/mockuuups-microsoft-surface-studio.png"
import CapIcon from "../../assets/svg/student-cap-svgrepo-com 1.svg"
import ClockIcon from "../../assets/svg/clock-circle-svgrepo-com 1.svg"
import StudentPersonIcon from "../../assets/svg/student-person-part-2-svgrepo-com (1) 1.svg"
import {solutions} from "./components/data"
import { techStacks } from './components/techStak'




const OurSolutions = () => {

  return (
    <div>
        {/* Our Solutions */}
           <div className=' flex flex-col px-[33px] pt-5 md:pt-[94px]  md:pb-[133px] md:px-[190px]  md:gap-14'>
        <div className=' flex flex-col gap-3'>
            <h3 className=' font-lato font-bold text-[40px] leading-12 text-center'>Our solutions</h3>
            <p className=' font-inter md:text-center leading-6 text-center'>Create your account quickly with just your email or social media login, then explore a wide range </p>
        </div>
        <div className="flex flex-col pt-[56px] md:flex-row gap-7 justify-center items-center mb-10 md:mb-0 ">
  {solutions.map((item) => (
    <div key={item.title} className="w-[325px] p-6 border shadow-lg rounded-lg border-t-0 flex flex-col justify-between">
      <div className="flex flex-col gap-4 flex-grow">
        <img src={item.icon} alt="" className="w-[86px] h-[86px] md:w-[81px] md:h-[81px]" />
        <p className="font-semibold">{item.title}</p>
        <p className=" text-justify">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p>${item.price}</p>
        <Button className="bg-transparent shadow-none hover:bg-transparent text-blue-primary">
          preview
        </Button>
      </div>
    </div>
  ))}
</div>


           </div>
        {/*  What Will be our next step */}
        <div className='flex px:[-14px] md:px-0 pt-8 bg-blue-primary h-[597px] md:h-[477px] rounded-md'>
            <div className='flex-1 flex flex-col gap-9 md:pl-[199px]'>
                <div className=' flex flex-col gap-3 px-5 md:px-0 md:w-[539px] text-white'>
                    <h3 className=' text-[40px] font-lato font-bold  leading-[1.2] '>What will be next step</h3>
                    <p className='font-inter text-base leading-6 '>Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!</p>
                </div>
                <div className=' flex justify-center md:mr-[146px]'>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 bg-blue-primary  items-start">
  {techStacks.map((tech) => (
    <a
      key={tech.name}
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center cursor-pointer text-white border ${tech.color} py-2 px-4 rounded-md hover:bg-blue-primary transition text-base font-inter leading-6`}
    >
      {tech.name}
    </a>
  ))}
</div>
       
   
            
                </div>
            </div>
            {/*  */}
            <div className=' hidden relative flex-1 md:flex '>
            <img src={IphoneImage} alt="Iphone Having Coding Background Image" className='md:mt-[182px] z-10'   />
                <img src={MicrosoftSurface} alt="Microsoft Surface Desktop Screen" className='absolute left-[47px] mt-[30px]' />
       

            </div>

        </div>
        {/* What are we proud of  */}
        <div className="hidden md:flex flex-col mt-[84px] pb-[95px]">
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
import React from 'react'
import { Input } from "@/components/ui/input"
import { LucideSearch } from 'lucide-react'


const Courses = () => {
  return (
    <div>
      <div className='h-[80px] flex items-center justify-center w-full bg-blue-primary'>
        <h3 className='font-lato text-[30px] md:text-[40px] font-bold  text-center text-white '>Courses</h3>
      </div>
      <div className="relative px-4 pt-[40px] md:pt-[60px] md:px-[377px]">
  <div className="relative">
    <LucideSearch className="absolute left-3 top-[50%] -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    <Input
      className="pl-10 border border-[#E6E6E6] bg-[#F5F5F5] h-[44px] text-sm w-full"
      placeholder="Search Course"
    />
  </div>
  <div>
    <h4 className='font-bold font-lato leading-8  ml-12 md:ml-[195px] mt-6 md:mt-[56px]'>Top Courses</h4>
  </div>
</div>
<div className=' flex flex-col gap-6 w-[334px]'>
  <img src="" alt="" className='w-[334px] h-[225px]' />
  <div>
    <p>Software Development</p>
    <p>Unlock your potential with comprehensive training in modern software development</p>
  </div>

</div>

   

    </div>
  )
}

export default Courses
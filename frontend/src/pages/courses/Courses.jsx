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
</div>

   

    </div>
  )
}

export default Courses
import React from 'react'

const Footer = () => {
  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-primary h-[281px]">
     <div><img src="" alt="Logo" /></div>
  

  <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[40px] text-white md:mt-[56px]">
    {/* Column 1 (auto width) */}
    <div>
      <ul className=' flex flex-col gap-[14px] '>
        <li className="font-semibold text-[20px] leading-8">Menu</li>
        <li className="font-base font-inter font-normal">Home</li>
        <li>Course</li>
      </ul>
    </div>

    {/* Column 2 (auto width) */}
    <div  className='col-span-2'>
      <ul className=' flex flex-col gap-[14px]'>
        <li className="font-semibold text-[20px] leading-8" >Contact</li>
        <li>+23341002000</li>
        <li>New Reiss ,Ghana, Accra</li>
      </ul>
    </div>

    {/* Column 3 (takes remaining space) */}
    <div>
      <ul className='  flex flex-col gap-[14px]' >
        <li className="font-semibold text-[20px] leading-8">Social</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
      </ul>
    </div>
  </div>
  {/* Footer Botom part */}
  

</div>
<div className="w-full h-px bg-white"></div>
    </div>


  )
}

export default Footer
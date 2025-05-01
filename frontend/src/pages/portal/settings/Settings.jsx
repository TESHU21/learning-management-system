import React from 'react'
import { Power,Plus,User } from 'lucide-react'
import { profileSchema,passwordSchema,profileInitialValues,passwordInitialValues,profileFields,passwordFields } from './data'
import FormComp from '@/components/FormComp'
import { Button } from '@/components/ui/button'


const Settings = () => {
  return (
    <div className=' flex justify-center px-[200px] gap-[49px]'>
      <div className= ' flex items-center justify-center w-[217px] h-[217px] rounded-full bg-[#F5F5F5]'>
        {/* <img src=alt="Profile Image"  className=' rounded-full w-10 h-10'/> */}
        <User className=''/>
      </div>
      <div className=' w-full md:w-[775px]   '>
        <div className="">
          <h4 className='mb-4 font-lato text-[32px] leading-8 font-bold'>Profile</h4>
          <div className='bg-[#f0f0f0] px-[52px] pt-[67px] pb-[84px]' >
          <div className='md:w-[675px] '>
          <FormComp schema={profileSchema} initialValues={profileInitialValues} fields={profileFields}  hideButton={true} />
          </div>
          </div>
         
          
        </div>
        <div className='mt-[39px]'>
          <h4 className='mb-6 font-lato text-[32px] leading-8 font-bold'>Change Password</h4>
          <div className='bg-[#f0f0f0] px-[52px] pt-[67px] pb-[93px]'>
          <FormComp schema={passwordSchema} initialValues={passwordInitialValues} fields={passwordFields} hideButton={true}/>
          </div>
          
        </div>
        <div className=' flex justify-between items-center mt-[49px] mb-[183px]'>
          <Button className="bg-blue-primary h-[48px] px-6 py-3 ">Save Changes <span><Plus size={22}/></span></Button>
          <Button className="bg-[#E6E6E6] text-[#404040] h-[48px] w-[137px] px-6 py-3 hover:bg-amber-50 "><Power size={22}/> <span>Logout</span></Button>

        </div>
      </div>
    </div>
  )
}

export default Settings
import React, { useRef } from 'react'
import { Power, Plus } from 'lucide-react'
import {
  profileSchema, passwordSchema,
  profileInitialValues, passwordInitialValues,
  profileFields, passwordFields
} from './data'
import FormComp from '@/components/FormComp'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/authContext'

const Settings = () => {
  
  const profileRef = useRef(null)
  const passwordRef = useRef(null)
  const{updateLearnerProfile}=useAuth()
  const parsedUser=JSON.parse(sessionStorage.getItem("User"))
  console.log("User from Settings",parsedUser)

  const handleProfileSubmit = async (data) => {
    try{
      const response=await updateLearnerProfile(data)
    }
    catch(error){
      console.log(error)
    }
    // Call your profile update API here
    console.log("Updating profile:", data)
  }

  const handlePasswordSubmit = async (data) => {
    // Call your password update API here
    console.log("Updating password:", data)
  }

  const handleSubmitAll = () => {
    if (profileRef.current) profileRef.current.submit()
    if (passwordRef.current) passwordRef.current.submit()
  }

  return (
    <div className='flex justify-center px-[170px] gap-[40px]'>
      <div className='flex justify-center mt-[65px]'></div>
      <div className='w-full md:w-[775px] mt-[65px]'>
        <div>
          <h4 className='mb-4 font-lato text-[32px] leading-8 font-bold'>Profile</h4>
          <div className='bg-[#f0f0f0] px-[52px] pt-[67px] pb-[84px]'>
            <div className='md:w-[675px]'>
              <FormComp
                ref={profileRef}
                schema={profileSchema}
                initialValues={profileInitialValues}
                fields={profileFields}
                onSubmit={handleProfileSubmit}
                hideButton={true}
              />
            </div>
          </div>
        </div>
        <div className='mt-[39px]'>
          <h4 className='mb-6 font-lato text-[32px] leading-8 font-bold'>Change Password</h4>
          <div className='bg-[#f0f0f0] px-[52px] pt-[67px] pb-[93px]'>
            <FormComp
              ref={passwordRef}
              schema={passwordSchema}
              initialValues={passwordInitialValues}
              fields={passwordFields}
              onSubmit={handlePasswordSubmit}
              hideButton={true}
            />
          </div>
        </div>
        <div className='flex justify-between items-center mt-[49px] mb-[183px]'>
          <Button
            className="bg-blue-primary h-[48px] px-6 py-3"
            onClick={handleSubmitAll}
          >
            Save Changes <span><Plus size={22}/></span>
          </Button>
          <Button className="bg-[#E6E6E6] text-[#404040] h-[48px] w-[137px] px-6 py-3 hover:bg-amber-50 ">
            <Power size={22}/> <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Settings

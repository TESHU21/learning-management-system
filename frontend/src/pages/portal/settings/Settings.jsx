import React, { useRef,useState } from 'react'
import { Power, Plus } from 'lucide-react'
import {
  profileSchema, passwordSchema,
  profileInitialValues, passwordInitialValues,
  profileFields, passwordFields
} from './data'
import FormComp from '@/components/FormComp'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/authContext'
import Loader from '@/components/Loader'

const Settings = () => {
  const [isLoading,setIsLoading]=useState(false)
  const profileRef = useRef(null)
  const passwordRef = useRef(null)
  const { updateLearnerProfile } = useAuth()

  const handleSubmitAll = async () => {
    const profileData = profileRef.current?.getValues()
    const passwordData = passwordRef.current?.getValues()

    const mergedData = {
      ...profileData,
      ...passwordData
    }
    const dataToSend= Object.fromEntries(
      Object.entries(mergedData).map(([key, value]) => [key, String(value)])
    );
    console.log("merged data",dataToSend)

    try {
      setIsLoading(true)
      const res=await updateLearnerProfile(dataToSend)
      console.log("Responsible",res)
    } catch (error) {
      console.error("Failed to update profile:", error)
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-[40px] sm:px-6 lg:px-[170px]">
      <div className="w-full md:w-[775px] mt-[40px]">
        {/* Profile Section */}
        <div>
          <h4 className="mb-4 text-2xl md:text-[32px] font-bold">Profile</h4>
          <div className="bg-[#f0f0f0] px-4 sm:px-6 md:px-[52px] pt-10 pb-12">
            <FormComp
              ref={profileRef}
              schema={profileSchema}
              initialValues={profileInitialValues}
              fields={profileFields}
              hideButton={true}
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="mt-10">
          <h4 className="mb-6 text-2xl md:text-[32px] font-bold">Change Password</h4>
          <div className="bg-[#f0f0f0] px-4 sm:px-6 md:px-[52px] pt-10 pb-12">
            <FormComp
              ref={passwordRef}
              schema={passwordSchema}
              initialValues={passwordInitialValues}
              fields={passwordFields}
              hideButton={true}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-10 mb-20">
        <Button
  className="bg-blue-primary h-[48px] px-6 py-3"
  onClick={handleSubmitAll}
>
  {isLoading ? (
    <Loader />
  ) : (
    <>
      Save Changes
      <span className="ml-2">
        <Plus size={22} />
      </span>
    </>
  )}
</Button>

          <Button className="bg-[#E6E6E6] text-[#404040] h-[48px] w-full md:w-[137px] hover:bg-amber-50">
            <Power size={22} className="mr-2" /> Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Settings

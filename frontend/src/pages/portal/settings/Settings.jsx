import React, { useRef,useState,useEffect } from 'react'
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
import ProfileImage from './ProfileImage'
import { useCourse } from '@/contexts/CourseContext'
import { initialValues } from '@/pages/checkout/components/data'

const Settings = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [formData,setFormData]=useState(profileInitialValues)
  const [userData,setUserData]=useState({})
  const profileRef = useRef(null)
  const passwordRef = useRef(null)
  const { updateLearnerProfile ,getUserInfo} = useAuth()
  useEffect(()=>{
  const fetchUserData=async()=>{
    try{
      const response=await getUserInfo()
      const user=response?.data.user
      console.log(response)
      setUserData(user)

        // Filteed Form Data
        const filteredData = {
          firstName: user.firstName || initialValues.firstName,
          lastName: user.lastName || initialValues.lastName,
          contact: user.contact || initialValues.contact,
          disabled: user.disabled || initialValues.disabled,
          location: user.location || initialValues.location,
          description: user.description || initialValues.description,
          
        };
        setFormData(filteredData)
      console.log("ffffffff",filteredData)
    }
    catch(error){
      console.log(error)
    }
  }

  fetchUserData()
  },[])

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
    <div className="flex w-full px-[200px] md:gap-[200px]  ">
      <div className=' mt-[65px]'>
         <ProfileImage user={userData}/>
      </div>
       
      <div className="  mt-[40px]">
      
        {/* Profile Section */}
        <div flex flex-col>
          <h4 className="mb-4 text-2xl md:text-[32px] font-bold">Profile</h4>
          <div className="bg-[#f0f0f0] px-4 sm:px-6 md:px-[52px] pt-10 pb-12">
            <FormComp
              ref={profileRef}
              schema={profileSchema}
              initialValues={formData}
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

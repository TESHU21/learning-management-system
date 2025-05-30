import React ,{useState,useEffect} from 'react'
import { Button } from '@/components/ui/button'
import LaptopImages from "../../../assets/images/Laptop with Code Screen.png"
import SoftwareDevImage from "../../../assets/course/Software.svg"
import { useCourse } from '@/contexts/CourseContext'

const Dashboard = () => {
  const [tracks,setTracks]=useState([])
  const {getallTracks}=useCourse()

  useEffect(()=>{
    const fetchEnrolledCourse=async()=>{
      try{
        const response=await getallTracks()
        setTracks(response.data.tracks)
      }
      catch(error){
        console.log(error)
      }

    }
    fetchEnrolledCourse()


  },[])
  return (
    <div className='md:px-[200px]'>
        <h3 className=' text-base leading-6 font-bold'>Enrolled courses</h3>
 {/* <h3 className='font-inter font-semibold md:text-[20px] text-base leading-4 md:leading-8 mt-6'>All Tracks</h3> */}

        <div className=' grid grid-cols-1 md:grid-cols-3 items-stretch'>
          {tracks.map((track)=>(
           <div className='flex' key={track.id}> 
            <div className=' flex flex-col justify-center py-6  mt-[59px] shadow-md  w-full md:w-[350px] rounded-lg'>
              <div className=' flex justify-center'>
                                <img src={track.image} alt="Course Image" className='w-[242px]  h-[174px] rounded-t-lg' />

              </div>
                <p className=' font-bold font-lato text-center leading-4 text-[12px] mt-[19px] text-[#404040] ml-[11px]'>{track.name}</p>
                <h3 className=' leading-6 text-base  pt-3 space-y-3 text-gray-600 ml-[11px]'>{track.description.split('.')[0]}
                       ...</h3>
                    <Button className=" bg-inherit hover:bg-green-50 cursor-pointer border-0 text-black mt-[54px] mb-[16px] shadow-none text-start ">Registered</Button>

                
            </div>

        </div>

        ))}
        </div>
        
       
        {/* Rate Us */}
        <div className=' mt-8 md:mt-[83px]'>
            <h3 className=' font-bold text-[20px] leading-8'>Rate us</h3>
            <div className=" flex my-8 ml-4 md:my-[59px] gap-[20px] md:w-[508px] p-6 shadow-lg shadow-black/15  rounded-lg">
      <img src={SoftwareDevImage} alt="" className="  w-[120px] h-[109px] md:w-[202px] md:h-[209.6px] object-cover" />
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
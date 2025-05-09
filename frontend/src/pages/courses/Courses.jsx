import React ,{useState,useEffect} from 'react'
import { Input } from "@/components/ui/input"
import { LucideSearch,LucideStar } from 'lucide-react'
import { Button } from "@/components/ui/button"

import { useNavigate } from 'react-router-dom'
import { useCourse } from '@/contexts/CourseContext'
import {PuffLoader}  from "react-spinners";
import { couch } from 'globals'

const Courses = () => {
  const [searchValue,setSearchValue]=useState("")
  const [isloading,setIsloading]=useState(false)
  const navigate=useNavigate()
  // import states from course context
  const{ getCourses,courses,setCourses,setSelectedCourse}=useCourse()
 
  const handleNavigate=(item)=>{
    console.log("Items Cost",item)
    navigate(`/courses/${item._id}`)
    setSelectedCourse(item)

  }
  useEffect(()=>{

    const fetchCourse=async()=>{
      try{
        setIsloading(true)
      const response=await getCourses()

      setCourses(response?.data.courses)

console.log("Fetched Courses",response)
      }
      catch(error){
        console.log(error)
      }
      finally{
        setIsloading(false)
      }

    }
    fetchCourse();


  },[])
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  if(isloading){
    return <div className='text-center  text-2xl font-lusitana text-gray-600 mt-10 flex justify-center  gap-10 items-center'>
      <span>Fetching</span><PuffLoader  size={200} color='#25e019'/>
    </div>
  }
  return (
    <div className=' mb-[200px]'>
      <div className='h-[80px] flex items-center justify-center w-full bg-blue-primary'>
        <h3 className='font-lato text-[30px] md:text-[40px] font-bold   text-white '>Courses</h3>
      </div>
      <div className="relative px-4 pt-[40px] md:pt-[60px]">
      <div className="relative flex justify-center">
  <div className="relative w-full max-w-md">
    <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    <Input
     value={searchValue}
     onChange={(e)=>setSearchValue(e.target.value)}
      className="pl-10 border border-[#E6E6E6] bg-[#F5F5F5] h-[44px] text-sm w-full md:w-[500px]"
      placeholder="Search Course"
      
    />
  </div>
</div>

  <div>
    <h4 className='font-bold font-lato leading-8  ml-12 md:ml-[195px] mt-6 md:mt-[56px]'>Top Courses</h4>
  </div>
</div>
{/* List Available Courses */}
<div className=' flex flex-col md:flex-row gap-[19px]  items-center mt-4 md:mt-[38px] md:px-[197px] '>
{filteredCourses.map((item)=>
  <div key={item._id} className=' flex flex-col gap-6 w-[334px]'>
  <img src={item.image} alt="" className='w-[334px] h-[225px]' />
  <div className=' flex flex-col gap-[30px]'>
    <p className='font-inter font-semibold text-[20px] leading-8 text-center'>{item.title}</p>
    <p className='font-inter text-base leading-6 text-center '>{item.description}</p>

    <div className=' flex justify-between items-center px-3' >
      <div  className=' flex  items-center gap-1'> 
         {/* rating */}
      {[1,2,3,4,5].map((star)=>(
        <LucideStar key={star} className={`w-6 h-6 cursor-pointer ${item.rating>=star? "text-yellow-600 fill-current":""} `}/>
      ))}
      <span className=' text-[20px] leading-8 ml-[10px] font-semibold'>{item.track.rating}</span></div>

      <p className='font-inter text-base leading-6 text-center font-semibold'>Price:${item.track.price}</p>
      </div>
      <Button className="bg-blue-primary py-4 px-6 h-12 cursor-pointer hover:bg-blue-700" onClick={()=>handleNavigate(item)}  >Preview course</Button>
      
   </div>

</div>
)}
</div>



   

    </div>
  )
}

export default Courses
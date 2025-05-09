import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { course, coursedetail } from "./data";
import { LiaCircle } from "react-icons/lia";
import { Clock, GraduationCap, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {LucideStar} from 'lucide-react'
import { useCourse } from "@/contexts/CourseContext";
import { useNavigate } from "react-router-dom";

export default function CourseDetail() {
  const {id } = useParams();

  const [openedCourse, setOpenedCourse] = useState([]);
  const [relatedCourse,setRelatedCourse]=useState(null)
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const {courses, selectedCourse,getSingleCourses,enrollLearnersbyTrack, createInvoices}=useCourse()
  const paystackCallbackUrl=window.location.href;
  
  const handleTrackEnrollment=async(e,data)=>{
    console.log("Track Data",data)
    const track=data.track.id;
    const amount=data.track.amount;
    const dataToSend={track,amount,paystackCallbackUrl}


    
    try{
      setIsLoading(true)
      const response=await enrollLearnersbyTrack(dataToSend)

      // 

      if(response){
        navigate("/checkout")

      }
    
    }
    catch(error){
      console.log(error)
    }
    finally{
      setIsLoading(false)
    }

  }


  

  useEffect(() => {
    const foundCourse = courses.find((course) => course._id ===selectedCourse._id);
    setOpenedCourse(foundCourse);
    console.log("Coursesfound",foundCourse)
    const otherCourse=courses.filter((course)=>course._id!==selectedCourse._id)
    console.log("Coursesfound",otherCourse)

    setRelatedCourse(otherCourse)
  }, [id,courses]);
  console.log("opened course",openedCourse)

  if (!openedCourse) {
    return (
      <div className="w-full h-[427px] bg-blue-primary text-white flex items-center justify-center">
        <p className="text-lg">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className=" relative w-full">
      {/* Header Section */}
      <div className="w-full md:h-[427px] bg-blue-primary text-white">
        {/* Breadcrumb Navigation */}
        <nav className="pt-[53px] px-4 md:px-[203px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-white" />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/courses" className="text-white">
                    Courses
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-white" />

              <BreadcrumbItem>
                <span className="text-white">{openedCourse.name}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Course Detail Content */}
        <div className=" flex flex-col mt-10 px-4 md:px-[203px]">
          <h3 className=" text-xl md:text-3xl   font-bold mb-4">{openedCourse.title}</h3>
          <p className="mb-6 mt-[21px] md:w-[556px] text-base font-inter text-justify ">{openedCourse.description}</p>
          <div className="flex gap-4 md:gap-8 text-base ">
            <div className="flex flex-col  md:w-[74px] gap-1 text-base leading-6  font-inter">
              <span className="">Instructor</span>
              <span>{openedCourse?.track?.instructor}</span>
            </div>
            <div className=" flex flex-col text-base leading-6  font-inter">
              <span className="">Enrolled Students</span>
              <span className="text-center md:text-start ">{openedCourse.total_enrolled_students}</span>
            </div>
            <div className="flex   flex-col text-base leading-6  font-inter">
            <span className="">1 review</span>
            <div className="flex gap-1"> {[1,2,3,4,5].map((star)=>(
                      <LucideStar key={star} className={`w-6 h-6 cursor-pointer ${openedCourse.rating>=star? "text-yellow-600 fill-current":""} `}/>
                    ))}
            </div>

               
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row">
         {/* Course Detail */}
      <div className=" md:absolute md:top-[60px] md:right-[202px] md:w-[402px] bg-white">
        <div className="mx-[20px] mt-[10px]">        
          <img src={openedCourse.image} alt="" className="w-[363px] h-[298px] object-cover" />
        </div>
        <div className="pt-[20px] w-[329px] mx-[35px]">
          <p className="font-semibold leding-8 text-[20px]">Course Details</p>
          <hr className="my-[8px]"/>
          <div className="px-6">
            <div className="flex  justify-between">
            <div className="flex gap-2 items-center"><Clock className="w-5 h-5 "/> <span className="leading-6 text-[16px]">Duration</span></div>
            <span>12 weeks</span>
            </div>
            <hr className="my-[23px]"/>
            <div className="flex  justify-between">
            <div className="flex gap-2 items-center"><GraduationCap className="w-5 h-5 "/> <span className="leading-6 text-[16px]">Courses</span></div>
            <span className="mr-4">5</span>
            </div>
            <hr className="my-[23px]"/>
            <div className="flex  justify-between">
            <div className="flex gap-2 items-center"><User className="w-5 h-5 "/> <span className="leading-6 text-[16px]">Instructor</span></div>
            <span>John Doe</span>
            </div>
            <hr className="my-[23px]"/>
            <div className="flex  justify-between">
            <div className="flex gap-2 items-center">< Calendar   className="w-5 h-5 "/> <span className="leading-6 text-[16px]">Date</span></div>
            <span>03/2025</span>
            </div>
            <hr className="my-[23px]"/>
            <p className="font-semibold text-center py-[18px]">$350.00</p>
            
          </div>
          <Button className=" w-full bg-blue-primary py-3 px-6  font-semibold hover:bg-blue-primary cursor-pointer"  onClick={(e)=>handleTrackEnrollment(e,openedCourse)}>{isLoading?<Loader/>:"Enroll"}</Button>
         
        </div>
      </div>
         {/* What We Learn Section */}
      <div className="md:ml-[200px] px-4 mt-[30px] py-10 mb-[34px] md:border border-[#E6E6E6] w-full md:w-[632px] md:pl-[11px] md:pt-[33px]">
        <p className="font-semibold">What you'll learn</p>
        <div className="flex flex-col gap-3 pl-5">
  {/* {openedCourse.core_concepts.map((item) => (
    <p key={item._id} className="flex gap-[10px]  items-baseline text-base w-full md:w-[578px] mt-2 leading-6">
      <span className="h-2 w-2 rounded-full bg-gray-300 flex-shrink-0"></span>
      {item}
    </p>
  ))} */}
  </div>

      </div>
     

      </div>
      {/* Explore Related Courses */}
      <div className="md:mx-[200px] mx-6 mb-10 md:mb-[187px]">
        <p className=" font-semibold leading-[32px] text-[20px] px-4 text-start font-inter">Explore related courses</p>
        <div className=" flex  flex-col md:flex-row justify-center  gap-6  md:mt-[62px]">
        {
        relatedCourse?.map((item)=>
        
    <div key={item.id} className=" flex items-center gap-[10px] w-full md:w-[508px] p-6 shadow-lg shadow-black/15  rounded-lg">
    
      <img src={item.image} alt="" className=" w-[100px] h-[109px] md:w-[202px]  md:h-[209.6px]  object-cover" />
      <div className=" flex flex-col  gap-4 mt-[40px] ">
        <p className=" font-semibold">{item.name}</p>
        <span className="leading-6 text-base text-justify">{item.description.split('.')[0]}.</span>
      </div>
    </div>
        )
      }

        </div>
      
      </div>
    
     
    </div>
  );
}

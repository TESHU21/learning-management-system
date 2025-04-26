import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { course, coursedetail } from "./data";
import { LiaCircle } from "react-icons/lia";
import { Clock, GraduationCap, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {LucideStar} from 'lucide-react'

export default function CourseDetail() {
  const { id } = useParams();
  const [openedCourse, setOpenedCourse] = useState(null);
  const [relatedCourse,setRelatedCourse]=useState(null)

  useEffect(() => {
    const foundCourse = coursedetail.find((course) => course.id === +id);
    setOpenedCourse(foundCourse);
    const otherCourse=coursedetail.filter((course)=>course.id!==+id)
    setRelatedCourse(otherCourse)
  }, [id]);

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
      <div className="w-full h-[427px] bg-blue-primary text-white">
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
        <div className="mt-10 px-4 md:px-[203px]">
          <h3 className="text-3xl font-bold mb-4">{openedCourse.title}</h3>
          <p className="mb-6 mt-[21px] w-[556px] text-base font-inter text-">{openedCourse.description}</p>
          <div className="flex flex-col md:flex-row gap-8 text-base">
            <div className="flex flex-col w-[74px] gap-1 text-base leading-6  font-inter">
              <span className="">Instructor</span>
              <span>{openedCourse.instructor}</span>
            </div>
            <div className="flex flex-col text-base leading-6  font-inter">
              <span className="">Enrolled Students</span>
              <span className=" ">{openedCourse.total_enrolled_students}</span>
            </div>
            <div className="flex flex-col text-base leading-6  font-inter">
            <span className="">1 review</span>
            <div className="flex gap-1"> {[1,2,3,4,5].map((star)=>(
                      <LucideStar key={star} className={`w-6 h-6 cursor-pointer ${openedCourse.rating>=star? "text-yellow-600 fill-current":""} `}/>
                    ))}
            </div>

               
            </div>
          </div>
        </div>
      </div>
      <div className=" flex ">
         {/* What We Learn Section */}
      <div className="ml-[200px] mt-[30px] py-10 mb-[34px] border border-[#E6E6E6] w-[632px] pl-[11px] pt-[33px]">
        <p className="font-semibold">What you'll learn</p>
        <div className="flex flex-col gap-3 pl-5">
  {openedCourse.core_concepts.map((item, index) => (
    <p key={index} className="flex gap-[10px]  items-baseline text-base w-[578px] mt-2 leading-6">
      <span className="h-2 w-2 rounded-full bg-gray-300 flex-shrink-0"></span>
      {item}
    </p>
  ))}
  </div>

      </div>
      {/* Course Detail */}
      <div className=" absolute top-[60px] left-[836px] w-[402px] bg-white">
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
          <Button className=" w-full bg-blue-primary py-3 px-6  font-semibold hover:bg-blue-primary">Enroll</Button>
         
        </div>
      </div>

      </div>
      {/* Explore Related Courses */}
      {
        relatedCourse.map((item)=>
        
    <div key={item.id}>
      <img src={item.image} alt="" />
    </div>
        )
      }
     
    </div>
  );
}

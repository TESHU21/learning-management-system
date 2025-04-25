import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { coursedetail } from "./data";
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

  useEffect(() => {
    const foundCourse = coursedetail.find((course) => course.id === +id);
    setOpenedCourse(foundCourse);
  }, [id]);

  if (!openedCourse) {
    return (
      <div className="w-full h-[427px] bg-blue-primary text-white flex items-center justify-center">
        <p className="text-lg">Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
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
                    ))}</div>

               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { LucideSearch, LucideStar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useCourse } from '@/contexts/CourseContext';
import { PuffLoader } from "react-spinners";

const Courses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { getCourses, courses, setCourses, setSelectedCourse } = useCourse();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const response = await getCourses();
        setCourses(response?.data.courses || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchValue.toLowerCase())
  );
console.log(filteredCourses)
  const handleNavigate = (item) => {
    setSelectedCourse(item);
    navigate(`/courses/${item._id}`);
  };

  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center mt-10 text-gray-600'>
        <span className='text-2xl font-lusitana'>Fetching</span>
        <PuffLoader size={200} color='#25e019' />
      </div>
    );
  }

  return (
    <div className='mb-[200px]'>
      {/* Header */}
      <div className='h-[80px] flex items-center justify-center w-full bg-blue-primary'>
        <h3 className='font-lato text-[30px] md:text-[40px] font-bold text-white'>Courses</h3>
      </div>

      {/* Search Bar */}
      <div className="relative px-4 pt-[40px] md:pt-[60px]">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 border border-[#E6E6E6] bg-[#F5F5F5] h-[44px] text-sm w-full md:w-[500px]"
              placeholder="Search Course"
            />
          </div>
        </div>

        <h4 className='font-bold font-lato leading-8 ml-12 md:ml-[195px] mt-6 md:mt-[56px]'>Top Courses</h4>
      </div>

      {/* Courses with Flexbox */}
      <div className="flex flex-wrap justify-center md:justify-start gap-[19px] mt-4 md:mt-[38px] md:px-[197px]">
        {filteredCourses.map((item) => (
          <div
            key={item._id}
            className="flex flex-col w-full sm:w-[300px] md:w-[310px] lg:w-[334px] bg-white shadow-md rounded-md overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-[225px] object-cover" />

            <div className="flex flex-col flex-1 p-4">
              <p className="font-inter font-semibold text-[20px] leading-8 text-center">{item.title}</p>
              <p className="font-inter text-base leading-6 text-center line-clamp-3 mt-2">{item.description}</p>

              <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <LucideStar
                      key={star}
                      className={`w-5 h-5 ${item?.rating >= star ? "text-yellow-600 fill-current" : ""}`}
                    />
                  ))}
                  <span className="text-[16px] ml-2 font-semibold">{item?.track?.rating}</span>
                </div>
                <p className="font-inter text-base font-semibold">Price: ${item?.track?.price}</p>
              </div>

              {/* Push button to bottom */}
              <div className="mt-auto pt-4">
                <Button
                  className="bg-blue-primary py-4 px-6 h-12 w-full cursor-pointer hover:bg-blue-700"
                  onClick={() => handleNavigate(item)}
                >
                  Preview course
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

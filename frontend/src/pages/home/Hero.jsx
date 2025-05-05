import React from 'react';
import HeroImage from '../../assets/images/Hero.jpg';
import { Button } from '@/components/ui/button';
import LaptopImage from "../../assets/svg/LaptopImage.svg"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
  const handleGetStarted=()=>{
    navigate('/courses')
    console.log("Get Started")

  }
  const handleGetStartedMobile=()=>{
    navigate('/courses')
    console.log("Get Started")

  }
  return (
    <div>
      {/* Desktop */}
      <div
      className="relative hidden  md:flex h-[600px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(to right, #01589A, rgba(1, 88, 154, 0))',
        }}
      ></div>

      {/* Content */}
      <div className=" flex flex-col gap-3 relative  md:mt-[146px] md:ml-[202px] text-white md:w-[474px]">
        <h3 className="text-4xl font-bold leading-8 font-lato">
          Unlock Your Potential with <br />
          Industry-Leading Courses!
        </h3>
        <p className='hidden md:flex w-full md:w-[427px] '>"Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."</p>
        <Button onClick={handleGetStarted} className="md:w-[137px] md:h-[48px]  cursor-pointer rounded-md py-3 px-6 gap-3 bg-blue-primary text-white hover:bg-blue-primary ">Get started</Button>

      </div>
    </div>
    {/* Mobile */}
    <div className=' relative flex flex-col md:hidden  h-[400px] bg-cover bg-center  '  style={{ backgroundImage: `url(${HeroImage})` }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-40 z-0"
        style={{
          background: 'linear-gradient(to right, #01589A, rgba(1, 88, 154, 0))',
        }}
      ></div>
      <div className='flex flex-col gap-3 mt-10 mx-4 w-[200px] h-full justify-around'>
        <h6 className=' font-lato text-[30px] leading-8   font-bold  '>Unlock Your Potential with Industry-Leading Courses!</h6>
        <Button onClick={handleGetStartedMobile}  className="w-[110px] h-[40px]   rounded-md py-3 px-6 gap-3 bg-blue-primary text-white hover:bg-blue-primary cursor-pointer  z-10 ">Get started</Button>

      </div>

    </div>
    </div>
    
  );
};

export default Hero;

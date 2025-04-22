import React from 'react';
import HeroImage from '../../assets/images/Hero.jpg';
import { Button } from '@/components/ui/button';
import LaptopImage from "../../assets/svg/LaptopImage.svg"

const Hero = () => {
  return (
    <div>
      {/* Desktop */}
      <div
      className="relative hidden md:flex h-[600px] w-full bg-cover bg-center bg-no-repeat"
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
      <div className=" flex flex-col gap-3 relative mt-[146px] ml-[202px] text-white w-[474px]">
        <h3 className="text-4xl font-bold leading-8 font-lato">
          Unlock Your Potential with <br />
          Industry-Leading Courses!
        </h3>
        <p className='w-[427px] '>"Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."</p>
        <Button className="w-[137px] h-[48px]  cursor-pointer rounded-md py-3 px-6 gap-3 bg-blue-primary text-white hover:bg-blue-700 ">Get started</Button>

      </div>
    </div>
    {/* Mobile */}
    <div className='flex flex-col md:hidden justify-center items-center bg-blue-primary px-[18px] py-[53px]'>
      <img src={LaptopImage} alt="A Laptop Hero Image that shows Codes" className='w-[270.62px] h-[191.43px]  ' />
      <div className='flex flex-col gap-3 mt-6'>
        <h6 className=' font-lato text-[20px] leading-6 text-white font-bold text-justify'>Unlock Your Potential with Industry-Leading Courses!</h6>
        <p className=' text-base text-white text-justify'>"Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."</p>
      </div>

    </div>
    </div>
    
  );
};

export default Hero;

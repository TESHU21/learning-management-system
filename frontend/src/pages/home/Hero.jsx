import React from 'react';
import HeroImage from "../../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <div
      className=" relative flex  h-[600px] w-full bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
        {/* Over Lay */}
    <div
        className="absolute top-[80px] left-0  bg-opacity-50  " style={{
          background: 'linear-gradient(to right, rgba(173, 216, 230, 0.8), rgba(0, 0, 255, 0))'
        }}
       
      ></div>
      <div className=' mt-[146px] ml-[202px]'>
        <div>
            <h3 className=''>Unlock Your Potential with <br/>
            Industry-Leading Courses!</h3>

        </div>
        <div>

        </div>
      </div>

    </div>
  );
};

export default Hero;

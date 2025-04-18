import React from 'react'
import SoftwareIcon from "../../assets/svg/code-svgrepo-com 1.svg"
import CloudIcon from "../../assets/svg/Cloud.svg"
import DataScienceIcon from "../../assets/svg/dataScience.svg"

const OurSolutions = () => {
    const solutions=[
        { 
            icon:{SoftwareIcon},
            title:"Software Development",
            price:"350",
            description:"Unlock your potential with comprehensive training in modern software development",
    },
        { 
            icon:{DataScienceIcon},
            title:"Data Science Mastery",
            price:"350",
            description:"Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert.",
    },
        { 
            icon:{CloudIcon},
            title:"Cloud Computing Expertise",
            price:"350",
            description:"Gain hands-on experience in cloud architecture, preparing you to  manage scalable solutions.",
    }
]
  return (
    <div className=' flex flex-col mt-[94px] px-[190px]  gap-14'>
        <div className=' flex flex-col gap-3'>
            <h3 className=' font-lato font-bold text-[40px] leading-12 text-center'>Our solutions</h3>
            <p className=' font-inter text-center leading-6'>Create your account quickly with just your email or social media login, then explore a wide range </p>
        </div>
        <div className='p-6'>
        </div>
    </div>
  )
}

export default OurSolutions
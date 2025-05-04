import React from 'react'
import Hero from './Hero'
import OurSolutions from './OurSolutions'
import GetStartedSection from './GetStartedSection'

const Home = () => {
  const user =JSON.parse(sessionStorage.getItem("User"))
  const token =sessionStorage.getItem("Token")
  console.log("My Tokerr",token)
  console.log("My Tokerr",user)
  
  return (
    <div>
        <Hero/>
        <OurSolutions/>
        <GetStartedSection/>
    </div>
  )
}

export default Home
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '@/layout/Layout'
import Home from '@/pages/home/Home'
import Courses from '@/pages/courses/Courses'


const AppRoutes = () => {
  return (
    <Routes>
    <Route  path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='courses' element={<Courses/>}/>

    </Route>
    </Routes>
  )
}

export default AppRoutes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import Courses from '@/pages/courses/Courses';
import CourseDetail from '@/pages/courses/components/CourseDetail';
import Login from '@/pages/login/Login';
import SignUp from '@/pages/registration/SignUp';
import ForgotPassword from '@/pages/login/forgotpassword/ForgotPassword';
import { OtpVerification } from '@/pages/login/forgotpassword/OtpVerification';
import ResetPassword from '@/pages/login/forgotpassword/ResetPassword';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} /> {/* <-- no slash here */}
        <Route path='signup' element={<SignUp/>}/>
        <Route path="forogot_password" element={<ForgotPassword/>}/>
        <Route path="otp_verfication" element={<OtpVerification/>}/>
        <Route path='reset_password' element={<ResetPassword/>}/>


      </Route>

    </Routes>
  );
};

export default AppRoutes;

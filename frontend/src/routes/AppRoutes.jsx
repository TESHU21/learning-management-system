import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import Courses from '@/pages/courses/Courses';
import CourseDetail from '@/pages/courses/components/CourseDetail';
import Login from '@/pages/login/Login';
import SignUp from '@/pages/registration/SignUp';
import ForgotPassword from '@/pages/login/forgotpassword/ForgotPassword';
import  OtpVerification  from '@/pages/login/forgotpassword/EmailVerification';
import ResetPassword from '@/pages/login/forgotpassword/ResetPassword';
import Checkout from '@/pages/checkout/Checkout';
import Dashboard from '@/pages/portal/dashboard/Dashboard';
import Settings from '@/pages/portal/settings/Settings';
import Portal from '@/pages/portal/Portal';
import VerifyEmail from '@/pages/registration/VerifyEmail';
import EmailVerification from '@/pages/login/forgotpassword/EmailVerification';
import ResetPasswordFlow from '@/pages/login/forgotpassword/ResetPasswordFlow';
import PaymentSuccess from '@/pages/checkout/PaymentSuccess';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="login" element={<Login />} /> {/* <-- no slash here */}
        <Route path='signup' element={<SignUp/>}/>       
         <Route path="forgotpassword" element={<ForgotPassword />} />

        <Route path='checkout' element={<Checkout/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='portal' element={<Portal/>}/>
        <Route path='verifyemail' element={<VerifyEmail/>}/>
        <Route path="/payment-success" element={<PaymentSuccess/>}/>
        <Route path="/reset-password/:token" element={<EmailVerification/>}/>

      </Route>

    </Routes>
  );
};

export default AppRoutes;

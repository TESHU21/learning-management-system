import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";

const RouteFallback = () => {
  return (
    <div className="min-h-[40vh] w-full flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-4 border-blue-primary/20 border-t-blue-primary animate-spin" />
    </div>
  );
};

const Home = lazy(() => import("@/pages/home/Home"));
const Courses = lazy(() => import("@/pages/courses/Courses"));
const CourseDetail = lazy(
  () => import("@/pages/courses/components/CourseDetail"),
);
const Login = lazy(() => import("@/pages/login/Login"));
const SignUp = lazy(() => import("@/pages/registration/SignUp"));
const ForgotPassword = lazy(
  () => import("@/pages/login/forgotpassword/ForgotPassword"),
);
const Checkout = lazy(() => import("@/pages/checkout/Checkout"));
const Dashboard = lazy(() => import("@/pages/portal/dashboard/Dashboard"));
const Settings = lazy(() => import("@/pages/portal/settings/Settings"));
const Portal = lazy(() => import("@/pages/portal/Portal"));
const VerifyEmail = lazy(() => import("@/pages/registration/VerifyEmail"));
const EmailVerification = lazy(
  () => import("@/pages/login/forgotpassword/EmailVerification"),
);
const PaymentSuccess = lazy(() => import("@/pages/checkout/PaymentSuccess"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />

          <Route path="checkout" element={<Checkout />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="portal" element={<Portal />} />
          <Route path="verifyemail" element={<VerifyEmail />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route
            path="/reset-password/:token"
            element={<EmailVerification />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

import React,{useState} from 'react'
import ForgotPassword from './ForgotPassword'
import  OtpVerification  from './OtpVerification'
import ResetPassword from './ResetPassword'

const ForgotPasswordFlow = () => {
  const [step,setStep]=useState("otpverification")
  return (
    <div>
      {step==="forgotpassword" && <ForgotPassword/>}
      {step==="otpverification" && <OtpVerification/>}
      {step==="resetpassword" && <ResetPassword/>}
    </div>
  )
}

export default ForgotPasswordFlow
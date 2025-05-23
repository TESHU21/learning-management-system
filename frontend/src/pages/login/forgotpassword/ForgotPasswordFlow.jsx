import React,{useState} from 'react'
import ForgotPassword from './ForgotPassword'
// import  OtpVerification  from './OtpVerification'
import EmailVerification from './EmailVerification'
import ResetPassword from './ResetPassword'

const ForgotPasswordFlow = () => {
  const [step,setStep]=useState("forgotpassword")

  const handleChange=(nextstep)=>{
    setStep(nextstep)
  }
  return (
    <div>
      {step==="forgotpassword" && <ForgotPassword onNext={()=>handleChange("otpverification")}/>}
      {step==="otpverification" && <EmailVerification onNext={()=>handleChange("resetPassword")}/>}
      {step==="resetpassword" && <ResetPassword onNext={()=>handleChange("")} />}
    </div>
  )
}

export default ForgotPasswordFlow
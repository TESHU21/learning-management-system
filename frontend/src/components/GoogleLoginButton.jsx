import React from 'react'
import { Button } from './ui/button'
import { FcGoogle } from "react-icons/fc"; // "fc" = Flat Color icons
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';


const GoogleLoginButton = () => {
    const navigate=useNavigate()
    const login=useGoogleLogin({
        flow:'auth-code',
        onSuccess:async(codeResponse)=>{
            console.log('Authorization code:', codeResponse.code);

            //  send respond codeResponse.code to backend api
        // store token  from backend response to session storage
            navigate('/')

        },
        onError: (error) => {
            console.error('Google Login Failed', error);
          }
    })

  
  return (
    <div>
    <Button onClick={() => login()} className=" flex items-center bg-white hover:bg-white border border-blue-primary  w-full h-12 py-3 px-6 cursor-pointer"> <FcGoogle className='w-[22px] h-[22px]'/> <span className='text-blue-primary'>Log in using Google</span></Button>

    </div>
  )
}

export default GoogleLoginButton
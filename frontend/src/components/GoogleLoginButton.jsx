import React from 'react';
import { Button } from './ui/button';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Access Token:', tokenResponse.access_token);

      // Use access_token to get user info from Google
      const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      const userInfo = await res.json();
      console.log('Google User Info:', userInfo);
      // userInfo will include: name, email, picture, id, etc.
    },
    onError: (error) => {
      console.error('Google Login Failed', error);
    },
  });

  return (
    <Button
      onClick={() => login()}
      className="flex items-center bg-white hover:bg-white border border-blue-primary w-full h-12 py-3 px-6 cursor-pointer"
    >
      <FcGoogle className="w-[22px] h-[22px]" />
      <span className="text-blue-primary">Log in using Google</span>
    </Button>
  );
};

export default GoogleLoginButton;

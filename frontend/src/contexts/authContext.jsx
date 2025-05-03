import React, { useContext, createContext } from 'react';
import axiosInstance from '@/lib/axiosInstance';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
//  store token in session storage
const storeToken=(token)=>{
  sessionStorage.setItem("Token",JSON.stringify(token))

}
// store user in session storage
const storeUser=(user)=>{
  sessionStorage.setItem("User",JSON.stringify(user))

}





  // Register Learners
  const signup = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/signup/learner', data);
      return response.data;
    } catch (error) {
      console.log('Signup Failed', error);
      throw error;
    }
  };

  // Learner Signin
  const signin = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      if(response?.status===200){
        storeToken(response.data.token)
        storeUser(response.data.user)
      }
      return response;
    } catch (error) {
      console.log('Login Failed', error);
      throw error;
    }
  };

  const value = { signup, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

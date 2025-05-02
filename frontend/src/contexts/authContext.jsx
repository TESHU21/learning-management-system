import React, { useContext, createContext } from 'react';
import axiosInstance from '@/lib/axiosInstance';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
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
  const login = async (data) => {
    try {
      const response = await axiosInstance.post('/admin/auth/login', data);
      return response.data;
    } catch (error) {
      console.log('Login Failed', error);
      throw error;
    }
  };

  const value = { signup, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

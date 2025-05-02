import React,{useContext,createContext,useState,useEffect} from 'react'
import axiosInstance from '@/lib/axiosInstance';
const AuthContext=createContext();

// custom hook to use created contexts

export const useAuth=()=>{
    return useContext(AuthContext)
}
export const AuthProvider=({children})=>{
    // Register Learners
    const signup=async(data)=>{
        try{
            const response=await axiosInstance.post('/auth/signup/learner',data)
        }
        catch(error){
            console.log("Signup Failed", error);


        }


    }
    //Learner Signin functions
    const login=async(data)=>{
        try{
            const response=await axiosInstance.post('/admin/auth/login',data)
        }
        catch(error){
            console.log(error)
        }
    }

    const value={signup}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}




import React from 'react'
import HeroImage from "../../../assets/svg/Ellipse 32.svg"
import {z} from "zod"
import FormComp from '@/components/FormComp'

const ResetPassword = () => {
  const PasswordSchema = z .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must not exceed 32 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Show error on confirmPassword field
    message: "Passwords do not match",
  });
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword
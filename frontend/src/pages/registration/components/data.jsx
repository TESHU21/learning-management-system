import { z } from "zod";
import { Mail,LockKeyhole } from "lucide-react";
import { CiUser } from "react-icons/ci";
export const SignUpSchema = z.object({
    firstName:z.string().min(2, { message: "Name Should be 2 or more characters long" }),
    lastName:z.string().min(2, { message: "Name Should be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { message: "Password Should at least eight character" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password should be at least 8 characters." }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // where the error should appear
    message: "Passwords don't match.",
  });
export const initialValues = {
    firstName:"",
    lastName:"",

  email: "",
  password: "",
  confirmPassword:"",
};
export const fields = [
  {  name: "firstName",placeholder:"First Name",icon:CiUser, type: "name", className: "col-span-2" },
  {  name: "lastName",placeholder:"Last Name",icon:CiUser, type: "name", className: "col-span-2" },
  {  name: "email",placeholder:"Email",icon:Mail, type: "email", className: "col-span-2" },
 
  {
    
    name: "password",
    placeholder:"Password",
    icon:LockKeyhole,
    type: "password",
    className: "col-span-2 ",
  },
  {
    
    name: "confirmPassword",
    placeholder:"Confirm Password",
    icon:LockKeyhole,
    type: "password",
    className: "col-span-2 ",
  },
];

import { course } from "@/pages/courses/components/data";
import { User,Mail,GraduationCap,Phone, MapPin,Users} from "lucide-react";
import {z} from "zod"
const phoneRegex = new RegExp(  /^(?:\+251|251|0)?(9\d{8})$/,);
export const CheckoutSchema = z.object({
    fullName:z.string().min(2,{message:"Full should be at least two characters"}).optional(),
    course:z.string().min(2,{message:"Course name should be at least two characters"}).optional(),
    email: z.string().email({ message: "Invalid Email Adress" }),
    gender: z.enum(["male", "female"]).optional(),
    contact: z.string().regex(phoneRegex, {
        message: "Phone number must start with 09 or 07 and be 10 digits long",
      }).optional(),
      location: z.string()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location must be under 100 characters" })
    .regex(/^[a-zA-Z\s,.'-]+$/, {
      message: "Location can only contain letters, spaces, commas, periods, apostrophes, and hyphens",
    }).optional(),
    disabled: z.enum(["yes", "no"]).optional(),
    description: z.string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must be under 1000 characters" }).optional(),
  });
  export const initialValues = {
    fullName: "",
    course: "",
    email:"",
    gender:"",
    contact:"",
    location:"",
    disabled:"",
    description:"",

  };
  export const fields = [
    {  name: "fullName",placeholder:"Full Name",icon:User, type: "text", className: "col-span-2" },
    {  name: "email",placeholder:"Email",icon:Mail, type: "text", className: "col-span-2" },
    {  name: "course",placeholder:"Course",icon:GraduationCap, type: "text", className: "col-span-2" },
    {  name: "gender",placeholder:"Gender",icon:User, type: "select", className: "col-span-2  " ,
       options: [
      { name: "Male", value: "male" },
      { name: "Female", value: "female" },
    ],
    },
    {  name: "contact",placeholder:"Phone Number",icon:Phone, type: "text", className: "col-span-2" },
    {  name: "location",placeholder:"Location",icon:MapPin, type: "text", className: "col-span-2" },
    {  name: "disabled",placeholder:"Disabled",icon:Users, type: "select", className: "col-span-2" ,
        options: [
      { name: "Yes", value: "yes" },
      { name: "No", value: "no" },
    ],
    },
    {  name: "description",placeholder:"Description", type: "textarea", className: "col-span-2" },


   
  ];
  
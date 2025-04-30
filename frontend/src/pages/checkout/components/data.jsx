import { course } from "@/pages/courses/components/data";
import { User,Mail,GraduationCap,Phone, MapPin,Users} from "lucide-react";
import {z} from "zod"
const phoneRegex = /^(09|07)\d{8}$/;
export const CheckoutSchema = z.object({
    fullName:z.string().min(2,{message:"Full should be at least two characters"}),
    course:z.string().min(2,{message:"Course name should be at least two characters"}),
    email: z.string().email({ message: "Invalid Email Adress" }),
    gender: z.enum(["male", "female"]),
    phoneNumber: z.string().regex(phoneRegex, {
        message: "Phone number must start with 09 or 07 and be 10 digits long",
      }),
      location: z.string()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location must be under 100 characters" })
    .regex(/^[a-zA-Z\s,.'-]+$/, {
      message: "Location can only contain letters, spaces, commas, periods, apostrophes, and hyphens",
    }),
    disabled: z.enum(["yes", "no"]),
    description: z.string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must be under 1000 characters" }),
  });
  export const initialValues = {
    fullName: "",
    course: "",
    email:"",
    gender:"",
    phoneNumber:"",
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
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
    },
    {  name: "phoneNumber",placeholder:"Phone Number",icon:Phone, type: "text", className: "col-span-2" },
    {  name: "location",placeholder:"Location",icon:MapPin, type: "text", className: "col-span-2" },
    {  name: "disabled",placeholder:"Disabled",icon:Users, type: "select", className: "col-span-2" ,
        options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
    },
    {  name: "description",placeholder:"Description", type: "textarea", className: "col-span-2" },


   
  ];
  
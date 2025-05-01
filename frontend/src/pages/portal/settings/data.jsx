 import { User,Phone ,MapPin} from "lucide-react";
 import {z} from "zod"
 export const profileSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().optional(),
    location: z.string().optional(),
  });
  
 export  const passwordSchema = z
    .object({
      newPassword: z.string().min(8, "Password must be at least 8 characters"),
      confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

    export const profileInitialValues = {
        firstName: "",
        lastName: "",
        phone: "",
        location: "",
      };

    export const profileFields=[
         {name: "firstName",placeholder:"First Name",icon:User, type: "text", className: "col-span-1  " ,},
         {name: "lastName",placeholder:"Last Name",icon:User, type: "text", className: "col-span-1 " ,},
         {name: "phone",placeholder:"Phone Number",icon:Phone, type: "text", className: "col-span-1  " ,},
         {name: "location",placeholder:"Location",icon:MapPin, type: "text", className: "col-span-1 " ,}
    ]
    export const passwordFields=[
         {name: "password",placeholder:"Password",icon:User, type: "text", className: "col-span-1" ,},
         {name: "confirmPassword",placeholder:"Confirm Password",icon:User, type: "text", className: "col-span-1" ,},
    ]
    
    
   export  const passwordInitialValues = {
        newPassword: "",
        confirmPassword: "",
      };
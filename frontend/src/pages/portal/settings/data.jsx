 import { User,Phone ,MapPin} from "lucide-react";
 import {z} from "zod"
 export const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"), // Ensure it's not empty
  lastName: z.string().min(1, "Last name is required"), // Ensure it's not empty
  contact: z.string().min(1, "Phone number is required"), // Ensure it's not empty
  location: z.string().min(1, "Location is required"), // Ensure it's not empty
   // Ensure the field is required // Boolean field
   disabled: z.boolean().refine((value) => value === true || value === false, { message: "Please select a value" }), // Ensure it's required and not empty

  description: z.string().min(1, "Description is required"), // Ensure it's not empty
});

  export const passwordSchema = z.object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword:  z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword.trim() === data.confirmPassword.trim(), {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

    export const profileInitialValues = {
        firstName: "",
        lastName: "",
        contact: "",
        location: "",
        description:"",
        disabled: z.enum([false, true]).optional(),

      };

      export const profileFields = [
        { name: "firstName",label:"First Name" ,placeholder: "First Name", icon: User, type: "text", className: "col-span-2 md:col-span-1" },
        { name: "lastName",label:"Last Name", placeholder: "Last Name", icon: User, type: "text", className: "col-span-2 md:col-span-1" },
        { name: "contact",label:"Phone Number", placeholder: "Phone Number", icon: Phone, type: "text", className: "col-span-2 md:col-span-1" },
        { name: "location", label:"Location",placeholder: "Location", icon: MapPin, type: "text", className: "col-span-2 md:col-span-1" },
      
        {
          name: "disabled",
          label:"Disabled",
          placeholder: "Disabled",
          type: "select",
          options: [
            
            { name: "True",value: true },
            { name: "False",value: false}
          ],
          className: "col-span-2 md:col-span-1   ",
        },
      
        {
          name: "description",
          label:"Description",
          placeholder: "Description",
          type: "textarea",
          className: "col-span-2 md:col-span-1",
        }
      ];
      
    export const passwordFields=[
         {name: "newPassword",label:"New Password",placeholder:"New Password",icon:User, type: "password", className: "col-span-1" ,},
         {name: "confirmPassword",label:"Confirm Password",placeholder:"Confirm Password",icon:User, type: "password", className: "col-span-1" ,},
    ]
    
    
   export  const passwordInitialValues = {
        newPassword: "",
        confirmPassword: "",
      };
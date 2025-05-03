import { z } from "zod";
import { Mail,LockKeyhole } from "lucide-react";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      passwordRegex,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});
export const initialValues = {
  email: "",
  password: "",
};
export const fields = [
  {  name: "email",placeholder:"Email",icon:Mail, type: "email", className: "col-span-2" },
  {
    
    name: "password",
    placeholder:"Password",
    icon:LockKeyhole,
    externalLink:true,
    type: "password",
    className: "col-span-2 ",
  },
];

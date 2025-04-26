import { z } from "zod";
import { Mail,LockKeyhole } from "lucide-react";
export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { message: "Password Should at least eight character" }),
});
export const initialValues = {
  email: "",
  password: "",
};
export const fields = [
  { label: "Email", name: "email",placeholder:"Email",icon:Mail, type: "email", className: "col-span-2" },
  {
    label: "Password",
    name: "password",
    placeholder:"Password",
    icon:LockKeyhole,
    externalLink:true,
    type: "password",
    className: "col-span-2",
  },
];

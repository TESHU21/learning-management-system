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
    
export  const passwordInitialValues = {
        newPassword: "",
        confirmPassword: "",
      };
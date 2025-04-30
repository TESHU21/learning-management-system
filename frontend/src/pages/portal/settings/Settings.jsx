import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  newPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
});

function Settings() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      location: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="space-y-6 max-w-md">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Info Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Basic Information</h3>
              <p className="text-sm text-muted-foreground">John Doe</p>
              <p className="text-sm text-muted-foreground">Learner</p>
            </div>

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">First name</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "John" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Last name</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "Doe" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Separator />

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Phone</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "+1234567890" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Location</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "New York, USA" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Separator />

          {/* Password Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Change Password</h3>

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">New password</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "••••••••" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Confirm password</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value !== ""}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "••••••••" : "")
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Save changes <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Settings;

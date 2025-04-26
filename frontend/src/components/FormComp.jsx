import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

import { Input } from "./ui/input";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const FormComp = ({
  schema,
  initialValues,
  fields,
  onSubmit,
  handleInputChange,
  submitBtnText,
  isLoading,
  errorMessage,
  sucessMessage,
}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues || {},
  });

  const { setValue, getValues, trigger } = form;
  // Reset the form when initialValues changes
  useEffect(() => {
    form.reset(initialValues);
  }, [initialValues, form]);
  // password show visiblity
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisiblity = () => {
    setShowPassword((prev) => !prev);
  };
  //handle file upload
  console.log("Submitting")

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center   w-full"
        >
          <div className="  grid grid-cols-2 gap-2 w-full lg:gap-4 ">
            {typeof errorMessage === "string" && errorMessage && (
              <p className="text-xs text-red-800 text-center col-span-2 pt-1">
                {errorMessage}
              </p>
            )}
            {typeof sucessMessage === "string" && sucessMessage && (
              <p className="text-xs text-green-700 text-center col-span-2 pt-3">
                {sucessMessage}
              </p>
            )}

            {fields.map(
              ({
                type,
                name,
                value,
                label,
                className,
                placeholder,
                isRequired,
                options,
              }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field, fieldState: { error } }) => (
                    <FormItem className={`${className} w-full`}>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                        {type === "select" ? (
                          <Select
                            onValueChange={(value) => {
                              setValue(name, value || "");
                              trigger(name); // Revalidate the field after value change
                            }}
                            value={getValues(name) || ""}
                          >
                            <SelectTrigger id={name}>
                              <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value || ""}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : type === "textarea" ? (
                          <Textarea
                            {...field}
                            placeholder={placeholder}
                            id={name}
                            value={field.value || ""}
                          />
                        ) : type === "file" ? (
                          <Input
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            type={type}
                            className={className}
                          />
                        ) : (
                          <div className="relative">
                            <Input
                              {...field}
                              type={
                                type === "password"
                                  ? showPassword
                                    ? "text"
                                    : "password"
                                  : type
                              }
                              id={name}
                              placeholder={placeholder}
                              className="  border-2 border-stone-200 focus:outline-none focus:ring-indigo-100 focus:border-indigo-500 rounded-md"
                            />
                            {type === "password" && name === "password" && (
                              <span
                                className=" absolute  right-2  top-1/2 -translate-y-1/2	 text-sm "
                                onClick={handlePasswordVisiblity}
                              >
                                {showPassword ? (
                                  <BsEye size={18} />
                                ) : (
                                  <BsEyeSlash size={18} />
                                )}
                              </span>
                            )}
                          </div>
                        )}
                      </FormControl>
                      {error && (
                        <FormMessage className="text-xs font-normal lowercase ">
                          {" "}
                          <p>{error.message}</p>
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              )
            )}
          </div>
          <div className=" mt-8 ">
            <Button
              disabled={isLoading}
              type="submit"
              className=" px-10  py-6 text-base  "
            >
              {isLoading ? isLoading && "Loader" : submitBtnText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormComp;

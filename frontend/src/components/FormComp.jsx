"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BsEye, BsEyeSlash } from "react-icons/bs";

const FormComp = ({
  schema,
  initialValues,
  fields,
  onSubmit,
  handleInputChange,
  submitBtnText = "Submit",
  isLoading,
  errorMessage,
  successMessage,
  showForgotPassword ,
  // optional callback
}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues || {},
  });

  const { setValue, getValues, trigger } = form;

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    form.reset(initialValues);
  }, [initialValues, form]);

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          <div className="grid grid-cols-2 gap-3 w-full">
            {typeof errorMessage === "string" && errorMessage && (
              <p className="text-sm text-red-600 text-center col-span-2">
                {errorMessage}
              </p>
            )}
            {typeof successMessage === "string" && successMessage && (
              <p className="text-sm text-green-600 text-center col-span-2">
                {successMessage}
              </p>
            )}

            {fields?.map(
              ({
                label,
                name,
                type,
                placeholder,
                className,
                options,
                icon: Icon,
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
                              trigger(name);
                            }}
                            value={getValues(name) || ""}
                          >
                            <SelectTrigger id={name}>
                              <SelectValue placeholder={placeholder || "Select"} />
                            </SelectTrigger>
                            <SelectContent>
                              {options?.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
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
                            className={` bg-gray-400 ${className}`}
                          />
                        ) : (
                          <div className="relative">
                            {Icon && (
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <Icon size={18} />
                              </span>
                            )}
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
                              className=" bg-[#F5F5F5] px-10 py-2  h-[48px] w-full border border-[#E6E6E6] focus:outline-none focus:ring-1 focus:ring-indigo-200 focus:border-indigo-500 rounded-md"
                            />
                            {type === "password" && (
                              <span
                                onClick={handlePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                              >
                                {showPassword ? <BsEye size={18} /> : <BsEyeSlash size={18} />}
                              </span>
                            )}
                          </div>
                        )}
                      </FormControl>
                      {error && (
                        <FormMessage className="text-xs text-red-600 mt-1">
                          {error.message}
                        </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              )
            )}
          </div>

          {  showForgotPassword && (
            <div className="w-full flex justify-start mt-2 py-6 ">
              <button
                type="button"
              
                className="text-sm text-[#177DDC]  leading-6 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <div className="w-full mt-6">
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full h-[48px] px-6 bg-blue-primary hover:bg-blue-primary text-white py-3"
            >
              {isLoading ? "Loading..." : submitBtnText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormComp;

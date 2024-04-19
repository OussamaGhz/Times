"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import loginImage from "@/app/assets/login-image.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";

// Define the schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 8 characters long" }),
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const router = useRouter();

  const handleSubmit = async () => {
    // Use Zod schema to validate the inputs
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      // Extract errors and update state to display them
      const errors = result.error.format();
      setFormErrors({
        email: errors.email?._errors[0] || "",
        password: errors.password?._errors[0] || "",
      });
      return;
    }

    // Clear previous errors
    setFormErrors({ email: "", password: "" });

    // Authentication logic here
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        alert("Failed to sign in", response.error);
        return;
      }

      // Redirect to the home page
      router.push("/");
      
    } finally {
      // Handle any cleanup logic here
      
    }

    // Clear the form fields after the logic processing, if necessary
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-start mt-20 w-screen">
      <div className="lg:h-[552.835px] lg:w-3/5 lg:rounded-xl rounded-3xl flex flex-col lg:flex-row bg-white gap-[64.165px] lg:pr-[59.495px] p-12 lg:p-0">
        <div className="h-full w-1/2 hidden lg:block">
          <Image src={loginImage} alt="image" className="h-full" width={500} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col py-10 gap-28 text-center lg:text-left">
          <div className="flex flex-col gap-5">
            <h1 className="font-medium text-5xl">Bienvenue</h1>
            <p className="text-[#BDBDBD]">
              Accedez a votre compte pour consulter les emplois du temps.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleEmailChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00A4D4] focus:outline-none focus:ring-0 focus:border-[#00A4D4] peer h-16"
                placeholder=""
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Email
              </label>
              {formErrors.email && (
                <p className="text-red-500 text-xs italic">
                  {formErrors.email}
                </p>
              )}
            </div>
            {/* Password input */}
            <div>
              <div className="relative">
                <input
                  value={password}
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00A4D4] focus:outline-none focus:ring-0 focus:border-[#00A4D4] peer h-16"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  Password
                </label>
                {formErrors.password && (
                  <p className="text-red-500 text-xs italic">
                    {formErrors.password}
                  </p>
                )}
              </div>
              <p className="mx-4 font-extralight text-sm text-gray-400">
                Mot de passe doit contenir au moins 8 caracteres
              </p>
            </div>
            {/* Submit button */}
            <div className="my-5">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center h-12 text-lg items-center rounded-md bg-[#00A4D4] px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

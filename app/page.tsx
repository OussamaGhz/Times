import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function Home() {
  // add a user using prisma
  const addUser = async (formdata: FormData) => {
    "use server";
    const email = formdata.get("email") as string;
    const username = formdata.get("username") as string;
    const password = formdata.get("password") as string;

    console.log("Form data", email, username, password);
    

    // try {
    //   const user = await prisma.user.create({
    //     data: {
    //       email,
    //       username,
    //       password,
    //     },
    //   });
    //   console.log("User created", user);
    // } catch (error) {
    //   console.error("Failed to create user", error);
    // }
  };

  return (
    <form
      className="flex min-h-screen flex-col items-center justify-between p-24 text-black"
      action={addUser}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
        <p className="text-lg text-center mt-4">Get started by editing </p>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit" className="bg-red-200">
          submit
        </button>
      </div>
    </form>
  );
}

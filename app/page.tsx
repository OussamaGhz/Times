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

  return <div></div>;
}

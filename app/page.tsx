"use client";
import { PrismaClient } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const prisma = new PrismaClient();

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return <div>Rediceting...</div>;
};

export default Page;

import { PrismaClient } from "@prisma/client";

import Calendar from "./ui/calendar";

const prisma = new PrismaClient();

export default async function Home() {
  // add a user using prisma
  

  return (
    <div>
      <Calendar />
    </div>
  );
}

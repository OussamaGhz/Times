// global.d.ts

import { PrismaClient } from "@prisma/client";

declare global {
  // Ensure this is only declared once in the global scope
  var prisma: PrismaClient | undefined;
}

export {};

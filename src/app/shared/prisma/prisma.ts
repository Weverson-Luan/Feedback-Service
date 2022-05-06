import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //o prisma irá fica observando interação que o usuário 
  // tem com nossa aplicaçaõ
  log: ["query"],
});
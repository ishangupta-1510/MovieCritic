// prisma.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient; // Make prisma optional
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

// Utility function to simplify using Prisma in API routes
export const withPrisma =
  (handler: (prisma: PrismaClient) => any) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return handler(prisma);
    } catch (error) {
      console.error("Prisma error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

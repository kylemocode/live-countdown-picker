import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });
  const { query: { winnerId } } = req;
  try {
    await prisma.winner.delete({ where: { id: parseInt(winnerId as string) }});

    res.json({ success: true });
  } catch (e) {
    res.status(500);
    res.json({ error: "Error clearing winners with specific id" });
  } finally {
    await prisma.$disconnect();
  }
}
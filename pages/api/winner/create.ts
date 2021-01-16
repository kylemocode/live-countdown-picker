import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const { winnerName } = req.body;
    const winner = await prisma.winner.create({
      data: {
        winnerName
      },
    });

    res.status(201);
    res.json({ winner });
  } catch (e) {
    console.error(e);

    res.status(500);
    res.json({ error: "Sorry unable to save winner to database" });
  } finally {
    await prisma.$disconnect();
  }
}
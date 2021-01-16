import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const winners = await prisma.winner.findMany();
    res.status(200);
    res.json({ winners });
  } catch (e) {
    res.status(500);
    res.json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
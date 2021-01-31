import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import LRU from 'lru-cache';

const cacheOptions = {
  max: 100,
  maxAge: 1000 * 60 * 60, // 1 hour
};

const localCache = new LRU(cacheOptions);

export default async function(_req: NextApiRequest, res: NextApiResponse) {
  const cachedData = localCache.get('winners');
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    if (!cachedData) {
      const winners = await prisma.winner.findMany();
      localCache.set('winners', winners);
      res.status(200);
      return res.json({ winners });
    }

    res.status(200);
    return res.json({ winners: cachedData });
  } catch (e) {
    res.status(500);
    res.json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
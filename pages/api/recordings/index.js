import nc from 'next-connect';
import prisma from '../../../lib/prisma';
// import cors from 'cors';

const handler = nc()
  .get(async (req, res) => {
    const users = await prisma.recording.findMany()
    res.json(users)
  });

export default handler;
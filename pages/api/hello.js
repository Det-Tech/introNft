// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect';
import middleware from '../../lib/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res)=>{
  const user = await req.db
  .collection('users')
  .insertOne({
    email: req.body.email
  })
  .then((ops)=>{
    res.json(ops);
  })
})

export default handler;

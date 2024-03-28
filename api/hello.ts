import type { VercelRequest, VercelResponse } from '@vercel/node';

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'World' } = req.query
//   return res.json({
//     message: `Hello ${name}!`,
//   })
// }

export async function GET(req: Request) {
  const res = new Response('Test append cookies', {
    headers: {
      'content-type': 'text/html',
    },
  });
  res.headers.set('set-cookie', 'cookie_1=value');
  res.headers.append('set-cookie', 'cookie_2=value');
  res.headers.append('set-cookie', 'cookie_3=value');
  return res;
}

export const config = {
  runtime: 'edge',
};

export function GET() {
  const headers = new Headers([
    ['content-type', 'text/html'],
    ['set-cookie', 'cookie_1=value'],
    ['set-cookie', 'cookie_2=value'],
    ['set-cookie', 'cookie_3=value'],
  ]);
  return new Response('Test headers constructor', {
    headers,
  });
}

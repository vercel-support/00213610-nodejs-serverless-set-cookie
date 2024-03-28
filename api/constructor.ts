export const config = {
  runtime: 'edge',
};

function testNewHeaders() {
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

export default ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'].reduce(
  (acc, method) => ({ ...acc, [method]: testNewHeaders }), // note can also use testAppendCookies here.
  {}
);
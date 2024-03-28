export const config = {
  runtime: 'edge',
};
function testAppendCookies() {
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

export default ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'].reduce(
  (acc, method) => ({ ...acc, [method]: testAppendCookies }), // note can also use testAppendCookies here.
  {}
);

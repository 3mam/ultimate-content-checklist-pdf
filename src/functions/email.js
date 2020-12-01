function sendEmail(email) {
  const https = require('https');
  const data = JSON.stringify({
    email: email,
  });

  const options = {
    hostname: 'api.mailerlite.com',
    port: 443,
    path: '/api/v2/groups/105134414/subscribers',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': process.env.API_MAILERLITE,
    },
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = [];
      res.on('data', (d) => {
        data += d;
      });

      res.on('end', () => {
        resolve({ code: res.statusCode, data: data });
      });
    });
    req.write(data);
    req.end();
  });
}

exports.handler = async function (get) {
  console.log('GET: ', get);
  if (get.multiValueHeaders.email === undefined)
    return {
      statusCode: 400,
      body: 'No email!',
    };

  const [email] = get.multiValueHeaders.email;
  const answer = await sendEmail(email);

  return {
    statusCode: answer.code,
    body: answer.data,
  };
};

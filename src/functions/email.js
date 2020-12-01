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

	return new Promise((resolve, reject) => {
		const req = https.request(options, (res) => {
			let data = null;
			res.on('data', (d) => {
				data += d;
			});

			res.on('error', (e) => {
				reject(e);
			});

			res.on('end', () => {
				resolve({ statusCode: res.statusCode, body: data });
			});
		});
		req.write(data);
		req.end();
	});
}

function returnDefaultRespond() {
	return {
		statusCode: 400,
		body: 'No email!',
	};
}

function getEmailFromEvent({ multiValueHeaders, multiValueQueryStringParameters }) {
	if (multiValueHeaders.email !== undefined)
		return multiValueHeaders.email[0];
	else if (multiValueQueryStringParameters.email !== undefined)
		return multiValueQueryStringParameters.email[0];
	else
		return false;
}

exports.handler = async function (event) {
	const emailFromEvent = getEmailFromEvent(event);
	if (!emailFromEvent)
		return returnDefaultRespond();

	return await sendEmail(emailFromEvent);
};

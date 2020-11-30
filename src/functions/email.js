function sendEmail(email) {
	const https = require('https')
	const data = JSON.stringify({
		'email': email,
	})

	const options = {
		hostname: 'api.mailerlite.com',
		port: 443,
		path: '/api/v2/groups/105134414/subscribers',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-MailerLite-ApiKey': process.env.API_MAILERLITE,
		}
	}

	const req = https.request(options)
	req.write(data)
	req.end()
}


exports.handler = async function (get) {
	const returnObject = {
		statusCode: 200,
		body: 'This Is the Way',
	}

	if (get.multiValueHeaders.email === undefined)
		return returnObject

	const [email] = get.multiValueHeaders.email
	sendEmail(email)

	return returnObject
}

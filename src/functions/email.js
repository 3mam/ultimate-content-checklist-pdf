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

	return new Promise((resolve, reject) => {
		const req = https.request(options, res => {
			let data = null
			res.on('data', d => {
				data += d
			})

			res.on('error', e => {
				reject(e)
			})

			res.on('end', () => {
				resolve({ code: res.statusCode, data: data })
			})

		})
		req.write(data)
		req.end()
	})
}


exports.handler = async function (event) {
	if (event.multiValueHeaders.email === undefined)
		return {
			statusCode: 400,
			body: 'No email!',
		}

	const [email] = event.multiValueHeaders.email
	const { code, data } = await sendEmail(email)

	return {
		statusCode: code,
		body: data,
	}
}

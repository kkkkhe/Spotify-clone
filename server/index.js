const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require("axios")
const SpotifyWebApi = require('spotify-web-api-node')
const querystring = require("querystring");
const app = express()
app.use(express.json())
app.use(cors())
var redirect_uri = 'http://127.0.0.1:5173/callback';

app.get('/login', function (req, res) {
	var scope = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
			response_type: 'code',
			client_id: process.env.CLIENT_ID,
			scope: scope,
			redirect_uri,
		}));
});



app.post('/callback', (req, res) => {
	const code = req.body.code || null;
	console.log(req)
	axios({
		method: 'post',
		url: 'https://accounts.spotify.com/api/token',
		data: querystring.stringify({
			grant_type: 'authorization_code',
			code: code,
			redirect_uri
		}),
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
		},
	})
		.then(response => {
			if (response.status === 200) {
				res.json(response.data);
			} else {
				res.send('asdfasdf');
			}
		})
		.catch(error => {
			res.send(error);
		});
});
const start = () => {
	try {
		app.listen(5000, () => console.log('server started'))
	} catch (error) {
		console.log(error)
	}
}

start()

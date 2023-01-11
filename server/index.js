const express = require('express')
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const axios = require("axios")
// const SpotifyWebApi = require('spotify-web-api-node')
const querystring = require("querystring");
const app = express()
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://127.0.0.1:5173'}))
app.use(cookieParser())
var redirect_uri = 'http://127.0.0.1:5173/login';

app.get('/login', function (req, res) {
	var scope = 'user-read-currently-playing user-modify-playback-state app-remote-control streaming user-read-playback-state user-read-private user-read-email ugc-image-upload playlist-read-private playlist-modify-private playlist-modify-public user-follow-read user-follow-modify user-read-playback-position user-top-read user-read-recently-played';
	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
			response_type: 'code',
			client_id: process.env.CLIENT_ID,
			scope: scope,
			redirect_uri,
		}));
});



app.post('/', (req, res) => {
	const code = req.body.code || null;
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
				res.cookie('refreshToken', 'adsfasdf')
				res.json(response.data);
			} else {
				res.send('asdfasdf');
			}
		})
		.catch(error => {
			res.send(error);
		});
});


app.post('/refresh_token', (req, res) => {
	const refresh_token = req.body.refreshToken
	axios({
	  method: 'post',
	  url: 'https://accounts.spotify.com/api/token',
	  data: querystring.stringify({
		grant_type: 'refresh_token',
		refresh_token: refresh_token
	  }),
	  headers: {
		'content-type': 'application/x-www-form-urlencoded',
		Authorization: `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
	  },
	})
	  .then(response => {
		res.send(response.data);
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

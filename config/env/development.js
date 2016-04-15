var port = 1337;
module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '223630308026016',
		clientSecret: '560ea898e8a06f0590e217ec4b75f8e2',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'GHxdGr6Jam7E8aFclrbWaJgNb',
		clientSecret: '8Va7oHcyz3fHPvBw4rnR62ZWEgungWMv7t47cKKMvyUrWyLfXK',
		callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
	}
}
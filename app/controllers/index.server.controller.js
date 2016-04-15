exports.render = function(req, res) {
	res.render('index', {
		title: 'MEAN MVC',
		user: JSON.stringify(req.user) ? req.user.username : ''
	});
};

exports.main = function(req, res) {
	res.render('main', {
		title: 'MAIN PAGE',
		user: JSON.stringify(req.user) ? req.user.username : ''
	});
};
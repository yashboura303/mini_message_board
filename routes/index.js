var express = require('express');
var router = express.Router();

const messages = [{text:"Hi this is random", user:"Yash", added: new Date()},{text:"Hi this is random 2", user:"Anonymous", added: new Date()} ]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('form');
});

router.post('/new', function(req, res, next) {
	let user = req.body.author
	let text = req.body.message
	console.log(user)
	console.log(text)
	messages.push({
		text:text,
		user:user,
		added:new Date()
	})
    res.redirect('/');
});


module.exports = router;
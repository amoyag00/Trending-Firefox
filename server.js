var Twitter = require('twitter');
var express = require('express');
var app = express();

var client = new Twitter({
	  consumer_key: '',
	  consumer_secret: '',
	  access_token_key: '',
	  access_token_secret: ''
	});

app.get('/trends', function (req, res) {
	console.log("Received request");
	var params = {id: '23424950'};
	client.get('https://api.twitter.com/1.1/trends/place.json', params, function(error, tweets, response) {
	  if (!error) {
	  	res.send(JSON.stringify(tweets));
	    console.log(JSON.stringify(tweets,null,2));
	  }
	});
   
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
})

	

	
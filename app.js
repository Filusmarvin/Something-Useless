var express    = require('express');
var app 	   = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

Genre = require('../models/genre')
Character = require('../models/character')

// coonnect to mongoose
mongoose.connect('mongodb://localhost/dbz');
var db = mongoose.connection;

app.use(express.static('public'));

// this is the home page...
app.get('/', function (req, res){
	res.send('Please use  /api/books or /api/genre');
});

app.get('/api/character', function(req, res){
	Character.getCharacter(function(err, character){
		if(err){
			throw err;
		}
		res.json(character)
		console.log(character)
	});
});

app.get('/api/character/:_id', function(req, res){
	Character.getCharacterById(req.params._id, function(err, character){
		if(err){
			throw err;
		}
		res.json(character)
		console.log(character)
	});
});


app.get('/api/genre', function(req, res){
	Genre.getGenre(function(err, genre){
		if(err){
			throw err;
		}
		res.send(genre)
	});
});
 
app.listen(3000);
console.log('Running on port 3000.....')
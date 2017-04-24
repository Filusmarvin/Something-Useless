var mongoose = require('mongoose');

// Character Schema
var characterSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
// this is to access the object from the outside
var Character = module.exports = mongoose.model('Character', characterSchema)

// get Character
module.exports.getCharacter = function( callback){
	Character.find(callback); 
	console.log('getCharacter')
}

module.exports.getCharacterById = function( callback){
	Character.findById(callback);
}
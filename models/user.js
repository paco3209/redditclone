var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {  type: String,
				 required: true,
				 minlength:[5,'Nombre de usuario debe tener 5 o mas caracteres']
				},
	password: {type: String,
				 required: true,
				 minlength:[5,'Nombre de usuario debe tener 5 o mas caracteres']},

	isDeleted: {type: Boolean, default: false},
	createdAt: {type: Date, default: Date.now},


});

module.exports = mongoose.model('User',userSchema);
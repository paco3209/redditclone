var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	 title: {type: String, required: true},
	 link: String,
	 text: String,
	 isDeleted: {type: Boolean, default: false},
	 createdAt: {type: Date, default: Date.now},
	 _creator: {type: Schema.ObjectId, ref: 'User'},
	 _comments: [{ type: Schema.ObjectId, ref: 'Comment' }],




});

module.exports = mongoose.model('Post',postSchema);
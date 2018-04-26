var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
	 text: {type: String, required: true},
	 isDeleted: {type: Boolean, default: false},
	 createdAt: {type: Date, default: Date.now},
	 _creator: {type: Schema.ObjectId, ref: 'User'},
	 _post: {type: Schema.ObjectId, ref: 'Post'}
});

var autoPopulateCreator = function(next){
	this.populate({
		 path: '_creator',
		 select: 'username createdAt -_id'
	});
	next();
};


commentSchema.pre('find', autoPopulateCreator );




module.exports = mongoose.model('Comment',commentSchema);
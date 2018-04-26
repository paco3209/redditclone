var db = require('./../models');

var postController = {};

postController.post = (req, res) => {
	const {
		title,
		text,
		link,
		userId
	} = req.body; 

	var post = new db.post ({
		title,
		text, 
		link,
		_creator: userId,
	});
	post.save().then((newPost) => {
		return res.status(200).json({
			success: true,
			date: newPost
		})
		
	}).catch((err) => {
		return res.status(500).json({
			message: err
		})
	}); 
};

postController.getAll = (req, res) => {
	db.post.find({}).populate({
		path:'_creator',
		select: 'username createdAt -_id'

	}).populate({
		path: '_comments',
		select: 'text createdAt _creator'

	})


	.then((posts) =>{
		return res.status(200).json({
			success: true,
			
			data: posts
		});
	}).catch((err) =>{
		return res.status(500).json({
			message: err
		})
	})
	
}

postController.getUnique = (req, res) => {
	db.post.find({})
}

module.exports = postController;
var db = require('./../models');

var commentController = {};

commentController.post = (req, res)=>{
	var {
		text,
		userId,
		postId,
	} = req.body;




	
	var comment = new db.comment ({
		text,
		_creator: userId,
		_post: postId
	});
	
	comment.save().then((newComment)=>{
		db.post.findByIdAndUpdate(
				postId,
				{ $push: {'_comments': newComment._id} }
			).then((existingPost) =>{

					res.status(200).json({
					success: true,
					data: newComment,
					existingPost,
				});

			}).catch((err)=>{
				res.status(500).json({
				message: err
			
			});
		});
	}).catch((err)=>{
		res.status(500).json({
			message: err
		});
	});


}

module.exports = commentController
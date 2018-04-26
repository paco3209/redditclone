var db = require('./../models');

var userController = {};

userController.post = (req, res)=>{
	var {username, password} = req.body;
	var user = new db.user ({
		username,
		password
	});
	user.save().then((newUser)=>{
		res.status(200).json({
			success: true,
			data: newUser
		})
	}).catch((err)=>{
		res.status(500).json({
			message: err
		})
	});
}

module.exports = userController;
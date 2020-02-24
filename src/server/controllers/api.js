const Model = require('../models/Model');


getUsers = async (req, res) => {
	await Model.find({}, (err, users) => {
		if (err) {
			return res.status(404).json({success: false, error: err});
		}

		if (!users.length) {
			return res.status(404).json({success: false, error: 'Users not found'});
		}

		return res.status(200).json({success: true, data: users});
	}).catch(err => {console.log(err)});
};

module.exports = {
	getUsers
}
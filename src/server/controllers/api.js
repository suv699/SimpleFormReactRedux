const Model = require('../models/Model');

const getUsers = async (req, res) => {
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

const createUser = async(req, res) => {
	if (!req.body) {
		return res.status('400').json({success: false, error: 'Create failed!'});
	}
	// const user = new Model(req.body);
	await Model.create(req.body);
	return res.status(201).json({success: true, data: req.body});
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
	let user = await Model.findByIdAndDelete(id);

	return res.status(200).send({
		success: true,
		user
	});
}

const updateUser = async(req, res) => {
	const { id } = req.params;

	let user = Model.findByIdAndUpdate(id, req.body);

	return res.status(200).send({
		success: true,
		user
	});
}

module.exports = {
	getUsers,
	createUser,
	deleteUser,
	updateUser
}
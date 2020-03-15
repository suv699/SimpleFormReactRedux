const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


const userShema = new Schema({
		name: String,
		lastName: String,
		password: String
	}, {
		timestamps: true
	}
);

module.exports = mongoose.model('users', userShema);
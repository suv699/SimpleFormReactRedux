const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


const userShema = new Schema({
		name: String,
		age: Number
	}, {
		timestamps: true
	}
);

module.exports = mongoose.model('users', userShema);
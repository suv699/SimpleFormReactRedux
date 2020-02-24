const  mongoose =  require('mongoose');

const URL = 'mongodb://localhost:27017';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
	if (err) {
		console.error('Connection error', e.message);
	}

	console.log('Connect db OK!');
});

const db = mongoose.connection

module.exports = db
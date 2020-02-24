const express = require('express');
const db = require('./db/index');
const router = require('./routes/router');

const PORT = process.env.PORT || '5000';
const app = express();

app.use('/api', router);
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
	console.log(`Server has been on port ${PORT}`);
});

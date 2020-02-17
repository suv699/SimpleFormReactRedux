import express from 'express';
import bodyParser from 'body-parser';

import db from './db/index';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection Error!'));

app.listen(PORT, () => {
    console.log(`Server running om port ${PORT}`);
});
const express = require('express')
const config = require('config')
const start = require('./db/index')
const router = require('./routes/router')
const bodyParser = require('body-parser')

const PORT = config.get('port') || '5000'
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', router)

const startServer = async () => {
	await start()
	app.listen(PORT, () => {
		console.log(`Server has been on port ${PORT}`)
	});
}

startServer()

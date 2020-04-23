const mongoose = require('mongoose')
const config = require('config')

const URi = config.get('mongoUri')//'mongodb://localhost:27017';

async function start() {
  try {
    console.log('DB connecting start...')
    await mongoose.connect(URi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
			useCreateIndex: true
    }, (err) => {
      console.log('Connect db OK!')
    })
  } catch (e) {
    console.error.bind(console, 'MongoDB connection error:', e.message)
    process.exit(1)
  }
}

module.exports = start

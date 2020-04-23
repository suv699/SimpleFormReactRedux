const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
  account: {type: String, required: false},
  currency: {type: String, required: true},
  accountId: {type: String, required: true, unique: true},
  clientId: {type: String, required: true},
  amount: {type: String}
})

module.exports = mongoose.model('Account', accountSchema)
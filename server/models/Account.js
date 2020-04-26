const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
  account: {type: String, required: false},
  currency: {type: String, required: false},
  accountId: {type: String, required: false},
  clientId: {type: String, required: false},
  amount: {type: String}
})

module.exports = mongoose.model('Account', accountSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const operationSchema = new Schema({
  orderId: {type: String, required: true, unique: true},
  operationData: {type: Object, required: true},
  clientId: {type: String, required: false}
})

module.exports = mongoose.model('Operation', operationSchema)
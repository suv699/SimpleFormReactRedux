const express = require('express')
// const {getUsers, createUser, deleteUser, updateUser} = require('../controllers/api')
const auth = require('../controllers/auth.api')
const register = require('../controllers/reg.api')
const {getAccounts, createAccounts, updateAccount, createOperation, getOperation} = require('../controllers/api')

const router = express.Router()

/*
router.get('/users', getUsers)
router.post('/createUser', createUser)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)
*/

router.put('/accounts/:accountId', updateAccount)
router.get('/accounts/:clientId', getAccounts)
router.post('/accounts', createAccounts)
router.post('/order', createOperation)
router.get('/order/:clientId', getOperation)

router.post('/auth', auth)
router.post('/registration', register)



module.exports = router
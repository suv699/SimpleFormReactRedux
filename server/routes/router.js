const express = require('express')
const {getUsers, createUser, deleteUser, updateUser} = require('../controllers/api')
const auth = require('../controllers/auth.api')
const register = require('../controllers/reg.api')

const router = express.Router()

/*
router.get('/users', getUsers)
router.post('/createUser', createUser)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)
*/

router.post('/auth', register)
router.post('/registration', auth)

module.exports = router
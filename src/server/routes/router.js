const express = require('express');

const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/api');

const router = express.Router();

router.get('/users', getUsers);
router.post('/createUser', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);

module.exports = router;
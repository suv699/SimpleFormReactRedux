const bcrypt = require('bcryptjs')
// const {check, validationResult} = require('express-validator')
const User = require('../models/User')

const register = async (req, res) => {
  try {
    const {login, password, email} = req.body
    debugger
    const checkUniqueUser = await User.findOne({login})
    if (checkUniqueUser) {
      return res.status(400).json({msg: 'Пользователь с таким логином уже существует'})
    }
    const hashedPass = await bcrypt.hash(password, 12)
    const newUser = new User({
      login, password: hashedPass, email
    })
    await newUser.save()
    res.json({msg: 'Пользователь успешно создан'})
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

module.exports = register
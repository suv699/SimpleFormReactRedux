const bcrypt = require('bcryptjs')
const User = require('../models/User')

const register = async (req, res) => {
  try {
    const {login, password, email, name, lastName} = req.body
    debugger
    const checkUniqueUser = await User.findOne({login})
    if (checkUniqueUser) {
      return res.status(400).json({msg: 'Пользователь с таким логином уже существует'})
    }
    const hashedPass = await bcrypt.hash(password, 12)
    const newUser = new User({
      name,
      lastName,
      login,
      password: hashedPass,
      email
    })
    const {id: userId} = await newUser.save()
    res.status(201).json({msg: 'Пользователь успешно создан', save: true, userId})
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

module.exports = register
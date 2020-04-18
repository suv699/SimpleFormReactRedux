const User = require('../models/User')
const bcrypt = require('bcryptjs')

const auth = async (req, res) => {
  try {
    const {login, password} = req.body
    const user = await User.findOne({login})
    if (!user) {
      return res.status(400).json({msg: 'Пользователь не найден'})
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
    }

    res.status(200).json({
      userId: user.id
    })
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

module.exports = auth
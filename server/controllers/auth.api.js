const User = require('../models/User')

const auth = async (req, res) => {
  try {
    const {login, password} = req.body
    const user = await Model.findOne({login})
    if (!user) {
      return res.status(400).json({msg: 'Пользователь не найден'})
    }

    res.status(200).json({
      userId: user.id
    })
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

module.exports = auth
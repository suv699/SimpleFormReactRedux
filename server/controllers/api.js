const Account = require('../models/Account')
const Operation = require('../models/Operations')

const getAccounts = async (req, res) => {
  try {
    await Account.find({clientId: req.params.clientId}, (err, accounts) => {
      if (err) {
        return res.status(404).json({success: false, error: err})
      }
      if (!accounts.length) {
        return res.status(404).json({success: false, error: 'Accounts not found'})
      }
      return res.status(200).json({success: true, account: accounts[0]})
    })
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

const createAccounts = async (req, res) => {
  try {
    if (!req.body) {
      return res.status('400').json({success: false, error: 'Create failed!'})
    }
    const {account, currency, accountId, clientId, amount} = req.body
    const newAccount = new Account({
      account, currency, accountId, clientId, amount
    })
    await newAccount.save()
    return res.status(201).json({success: true, data: req.body})
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

/*const deleteUser = async (req, res) => {
  const {id} = req.params
  let user = await Model.findByIdAndDelete(id)

  return res.status(200).send({
    success: true, user
  })
}*/

const updateAccount = async (req, res) => {
  const {accountId} = req.params

  let upAccount = Account.findOneAndUpdate(accountId, req.body)

  return res.status(200).send({
    success: true, upAccount
  })
}

const createOperation = async (req, res) => {
  try {
    if (!req.body) {
      return res.status('400').json({success: false, error: 'Create failed!'})
    }
    const {accountId, clientId, operationData} = req.body
    const newOperation = new Operation({
      accountId, clientId, operationData
    })
    await newOperation.save()
    return res.status(201).json({success: true, data: req.body})
  } catch (e) {
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

const getOperation = async (req, res) => {
  try {
    await Operation.find({clientId: req.params.clientId}, (err, operation) => {
      if (err) {
        return res.status(404).json({success: false, error: err})
      }
      if (!operation.length) {
        return res.status(404).json({success: false, error: 'Operation not found'})
      }
      return res.status(200).json({success: true, operation: operation})
    })
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({msg: 'Произошла ошибка. Повторите снова.'})
  }
}

module.exports = {
  getAccounts,
  createAccounts,
  updateAccount,
  createOperation,
  getOperation
}

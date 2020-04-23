import {v4 as uuidv4} from 'uuid'
import {ActionTypes} from '../../types'
import {DisabledField, EnabledField, HideMsg, ShowMsg} from '../app'

export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(DisabledField())
      const headers = {
        'Content-Type': 'application/json',
      }
      const response = await fetch('/api/registration', {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      })
      const res = await response.json()
      const msgData = {
        text: res.msg,
        mode: response.status !== 201 ? 'error' : 'success',
      }
      dispatch(ShowMsg({message: msgData})) &&
        setTimeout(() => {
          dispatch(HideMsg())
        }, 3000)
      dispatch(EnabledField())

      createAccount(res.userId)
      res.save &&
        dispatch({
          type: ActionTypes.REGISTR,
        })
    } catch (e) {
      dispatch(EnabledField())
      console.log('Error auth')
    }
  }
}

export const onChangeFieldReg = (name: string, value: string) => {
  return {
    type: ActionTypes.ONCHAGEREGFIELD,
    field: name,
    value,
  }
}
const fakeAccount = {
  account: '12345678',
  currency: '$',
  amount: '352658',
}
function createAccount(clientId: any) {
  clientId &&
    fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify({
        ...fakeAccount,
        clientId,
        accountId: uuidv4(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
}

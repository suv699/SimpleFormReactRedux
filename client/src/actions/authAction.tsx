import {ActionTypes} from '../types'
import {DisabledField, EnabledField, HideMsg, ShowMsg} from './app'
import {IUserData} from '../models/user-info'
import {Dispatch} from 'redux'

export const authAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(DisabledField())
      const headers = {
        'Content-Type': 'application/json',
      }
      const body = JSON.stringify(data)
      const response = await fetch('/api/auth', {
        method: 'POST',
        body,
        headers,
      })
      const res = await response.json()
      dispatch({
        type: ActionTypes.FILLUSERDATA,
        userData: {
          ...res,
        },
      })
      const msgData = {
        text: res.msg,
        mode: response.status !== 200 ? 'error' : 'success',
      }
      !res.userId &&
        dispatch(ShowMsg({message: msgData})) &&
        setTimeout(() => {
          dispatch(HideMsg())
        }, 3000)
      dispatch(EnabledField())

      res.userId && dispatch(LogIn(res)) && dispatch(getAccount(res.userId))
    } catch (e) {
      dispatch(EnabledField())
      console.log('request error - ', e.message)
    }
  }
}

export const LogIn = (userData: IUserData) => {
  const {userId} = userData
  if (userId) {
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: userId,
      }),
    )
  }
  return {
    type: ActionTypes.SIGNIN,
    isAuthenticated: !!userId,
  }
}
export const Logout = () => {
  localStorage.clear()
  return {
    type: ActionTypes.LOGOUT,
  }
}

export const onChangeFieldAuth = (name: string, value: string) => {
  return {
    type: ActionTypes.ONCHAGEAUTHFIELD,
    field: name,
    value,
  }
}

export const getAccount = (clientId: any) => {
  return async (dispatch: Dispatch) => {
    const account = await fetch(`api/accounts/${clientId}`)
    const res = await account.json()

    dispatch({
      type: ActionTypes.GETACCOUNT,
      ...res.account,
    })
  }
}

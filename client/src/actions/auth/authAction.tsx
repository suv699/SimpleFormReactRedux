import {ActionTypes} from "../../types";
import {HideMsg, ShowMsg} from "../app";

export const authAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const body = JSON.stringify(data)
      const response = await fetch('/api/auth',{
        method: 'POST',
        body,
        headers
      })
      const res = await response.json()
      dispatch(LogiIn(res.userId))
      const msgData = {
        text: res.msg,
        mode: response.status !== 400 ? 'error' : 'success'
      }
      !res.userId && dispatch(ShowMsg(msgData)) && setTimeout(() => {dispatch(HideMsg())}, 3000)

    } catch (e) {
      console.log('request error - ', e.message)
    }
  }
}

export const LogiIn = (userId: any) => {
  if(userId) {
    localStorage.setItem('userData', JSON.stringify({
      userId: userId
    }))
  }
  return {
    type: ActionTypes.SIGNIN,
    isAuthenticated: !!userId
  }
}
export const Logout = () => {
  localStorage.clear()
  return {
    type: ActionTypes.LOGOUT
  }
}
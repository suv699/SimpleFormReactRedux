import {ActionTypes} from "../../types";

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

      dispatch({
        type: ActionTypes.SIGNIN,
        isAuthenticated: true
      })
    } catch (e) {
      console.log('request error - ', e.mess)
    }
  }
}
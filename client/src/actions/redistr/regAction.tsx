import {ActionTypes} from "../../types";
import {HideMsg, ShowMsg} from "../app";

export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await fetch('/api/registration',{
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
    const res = await response.json()
    const msgData = {
      text: res.msg,
      mode: response.status !== 201 ? 'error' : 'success'
    }
    !res.userId && dispatch(ShowMsg(msgData)) && setTimeout(() => {dispatch(HideMsg())}, 3000)
    return {
      type: ActionTypes.REGISTR,
      data: {
        isError: false,
        isErrorText: res.msg
      }
    }
  }
}
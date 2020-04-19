import {ActionTypes} from "../../types";
import {DisabledField, EnabledField, HideMsg, ShowMsg} from "../app";

export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(DisabledField())
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
      dispatch(EnabledField())
      dispatch({
        type: ActionTypes.REGISTR
      })
    } catch (e) {
      dispatch(EnabledField())
      console.log('Error auth')
    }
  }
}

export const onChangeFieldReg = (name: String, value: String) => {
  return {
    type: ActionTypes.ONCHAGEREGFIELD,
    field: name,
    value
  }
}
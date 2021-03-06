import {Dispatch} from 'redux'
import {ActionTypes} from '../types'
import {IMessage} from '../models/user-info'

export const ShowMsg = (data: IMessage) => {
  return {
    type: ActionTypes.SHOWMSG,
    ...data,
  }
}

export const HideMsg = () => {
  return {
    type: ActionTypes.HIDEMSG,
    text: '',
    mode: '',
  }
}

export const DisabledField = () => {
  return {
    type: ActionTypes.DISABLEDFIELD,
  }
}

export const EnabledField = () => {
  return {
    type: ActionTypes.ENABLEDFIELD,
  }
}

export const emptyField = () => {
  return async (dispatch: Dispatch) => {
    const msg = {
      text: 'Заполните все обязательные поля!',
      mode: 'error',
    }
    dispatch(ShowMsg({message: msg})) &&
      setTimeout(() => {
        dispatch(HideMsg())
      }, 3000)
  }
}

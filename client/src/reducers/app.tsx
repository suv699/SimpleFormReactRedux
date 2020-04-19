import {ActionTypes} from "../types";

const initialState = {
  isMsg: false,
  text: ''
}
export const msgReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SHOWMSG:
      return {...state, isMsg: true, ...action}
    case ActionTypes.HIDEMSG:
      return {...state, isMsg: false, ...action}
    default:
      return state
  }
}
import {ActionTypes} from '../types'

const initialState = {
  message: {
    text: '',
    mode: '',
  },
  isMsg: false,
  disabled: false,
  gridData: []
}
export const appReducer = (state = initialState, action: any) => {
  debugger
  switch (action.type) {
    case ActionTypes.SHOWMSG:
      return {...state, isMsg: true, ...action}
    case ActionTypes.HIDEMSG:
      return {...state, isMsg: false, ...action}
    case ActionTypes.DISABLEDFIELD:
      return {...state, disabled: true}
    case ActionTypes.ENABLEDFIELD:
      return {...state, disabled: false}
      case ActionTypes.UPDATEGRIDTDATA:
        return {
          ...state,
          gridData: [action.data, ...state.gridData]
        }
    default:
      return state
  }
}

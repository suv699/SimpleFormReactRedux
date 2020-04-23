import {ActionTypes} from '../types'

const initialStateUser = {
  userData: {}
}
export const userReducer = (state = initialStateUser, action: any) => {
  switch (action.type) {
    case ActionTypes.FILLUSERDATA:
      return {...state, ...action}
    default:
      return state
  }
}

const initialStateAccount = {}
export const accountReducer = (state = initialStateAccount, action: any) => {
  switch (action.type) {
    case ActionTypes.GETACCOUNT:
      return {...state, ...action}
    default:
      return state
  }
}
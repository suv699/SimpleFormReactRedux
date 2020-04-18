import {ActionTypes} from '../../types'

const initialState = {
  isAuthenticated: false
}
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return {
        ...state, isAuthenticated: action.isAuthenticated
      }
    case ActionTypes.LOGOUT:
      return {
        ...state, isAuthenticated: false
      }
    default:
      return state
  }
}
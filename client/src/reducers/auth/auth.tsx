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
    default:
      return state
  }
}
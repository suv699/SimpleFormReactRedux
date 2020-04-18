import {ActionTypes} from '../../types'

const initialState = {
  isAuthenticated: false
}
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return {
        ...state, ...action
      }
    default:
      return state
  }
}
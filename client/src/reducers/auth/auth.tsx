import {SIGNIN} from "../../types";

const initialState = {
  isAuthenticated: false
}
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state, ...action
      }
    default:
      return state
  }
}
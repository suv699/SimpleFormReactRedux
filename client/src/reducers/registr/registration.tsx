import { REGISTR } from "../../types"

const initialState = {
  isAuthenticated: false
}

export const registrReducer = (state = initialState, action: any) => {
  console.log('---=== registrReducer ===---')
  switch (action.type) {
    case REGISTR:
      return {
        ...state, ...action
      }
    default:
      return state
  }
}
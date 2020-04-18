import {IUserData} from "../../models/user-info";
import {ActionTypes} from '../../types'

const initialState: IUserData = {
  login: '',
  password: '',
  email: ''
}

export const registrReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REGISTR:
      return {
        ...state, ...action
      }
    default:
      return state
  }
}
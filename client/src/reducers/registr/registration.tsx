import {IUserRegistration} from "../../models/user-info";
import {ActionTypes} from '../../types'

const initialState: IUserRegistration = {
  login: '',
  password: '',
  email: ''
}

export const registrReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.REGISTR:
      return {
        ...state, ...action, login: '', password: '', email: ''
      }
    case ActionTypes.ONCHAGEREGFIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state
  }
}
import {ActionTypes} from '../../types'

const checkLocalStorage = () => {
  const d = JSON.parse(localStorage.getItem('userData') as string)
  return d && !!d.userId
}
const initialState = {
  isAuthenticated: checkLocalStorage(),
  login: '',
  password: ''
}
export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SIGNIN:
      return {
        ...state, isAuthenticated: action.isAuthenticated, login: '', password: ''
      }
    case ActionTypes.LOGOUT:
      return {
        ...state, isAuthenticated: false
			}
		case ActionTypes.ONCHAGEAUTHFIELD:
			return {
				...state,
				[action.field]: action.value
			}
    default:
      return state
  }
}
import {combineReducers} from 'redux'
import {registrReducer} from './registration'
import {authReducer} from './auth'
import {appReducer} from './app'
import {accountReducer, userReducer} from './user'
import { orderReducer } from './orderReducer'

export const rootReducer = combineReducers({
  regData: registrReducer,
  auth: authReducer,
  appData: appReducer,
  user: userReducer,
	account: accountReducer,
	order: orderReducer
})

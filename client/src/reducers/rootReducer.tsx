import {combineReducers} from 'redux'
import {registrReducer} from './registr/registration'
import {authReducer} from './auth/auth'
import {appReducer} from './app'
import {accountReducer, userReducer} from './user'

export const rootReducer = combineReducers({
  regData: registrReducer,
  auth: authReducer,
  appData: appReducer,
  user: userReducer,
  account: accountReducer,
})

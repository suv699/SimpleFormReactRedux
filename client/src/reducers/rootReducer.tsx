import {combineReducers} from "redux";
import {registrReducer} from "./registr/registration";
import {authReducer} from "./auth/auth";
import {appReducer} from "./app";

export const rootReducer = combineReducers({
  registr: registrReducer,
  auth: authReducer,
  appData: appReducer
})
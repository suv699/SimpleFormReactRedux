import {combineReducers} from "redux";
import {registrReducer} from "./registr/registration";
import {authReducer} from "./auth/auth";
import {msgReducer} from "./app";

export const rootReducer = combineReducers({
  registr: registrReducer,
  auth: authReducer,
  msg: msgReducer
})
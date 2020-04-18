import {combineReducers} from "redux";
import {registrReducer} from "./registr/registration";
import {authReducer} from "./auth/auth";

export const rootReducer = combineReducers({
  registr: registrReducer,
  auth: authReducer
})
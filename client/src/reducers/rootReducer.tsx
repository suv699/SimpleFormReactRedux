import {combineReducers} from "redux";
import {registrReducer} from "./registr/registration";

export const rootReducer = combineReducers({
  registr: registrReducer
})
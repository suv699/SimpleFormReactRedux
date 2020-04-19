import {ActionTypes} from "../types";
import { IMessage } from "../models/user-info";

export const ShowMsg = (data: IMessage) => {
  return {
    type: ActionTypes.SHOWMSG,
    ...data
  }
}

export const HideMsg = () => {
  return {
    type: ActionTypes.HIDEMSG,
    text: '',
    mode: ''
  }
}
import {REGISTR} from "../../types";

export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    const response = await fetch('/api/registration',{
      method: 'POST',
      body: data
    })
    const res = await response.json()
  }

  /*return {
    type: REGISTR,
    isAuthenticated: true,
    userData: data
  }*/
}
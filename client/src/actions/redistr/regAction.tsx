
export const registerAction = (data: any) => {
  return async (dispatch: any) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await fetch('/api/registration',{
      method: 'POST',
      body: JSON.stringify(data),
      headers
    })
    const res = await response.json()
  }
}
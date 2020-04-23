import {v4 as uuidv4} from 'uuid'
import {ActionTypes} from '../types'

export const nextStep = (step: number) => {
  return {
    type: ActionTypes.NEXTSTEP,
    step: step + 1,
  }
}

export const prevStep = (step: number) => {
  return {
    type: ActionTypes.PREVSTEP,
    step: step - 1,
  }
}

export const updatePaymentAttr = (data: any) => {
  return {
    type: ActionTypes.UPDATEPAYMENTDATA,
    data,
  }
}

const getClientId = () => {
	const d = JSON.parse(localStorage.getItem('userData') as string)
	console.log('d.userId - ',d.userId)
  return d.userId
}
export const createOrder = (data: any) => {
  return async (dispatch: any) => {
		const response = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
				operationData: {...data},
				orderId: uuidv4(),
				clientId: getClientId() + ''
      }),
      headers: {
        'Content-Type': 'application/json',
      },
		})
		
		const res = await response.json()
 debugger
		dispatch(updateGridData(res.data))
	}
}

const updateGridData = (data: any) => {
	return {
		type: ActionTypes.UPDATEGRIDTDATA,
		data
	}
}

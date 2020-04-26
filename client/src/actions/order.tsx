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
    const curDate = new Date().toDateString()
    const clientId = getClientId()
		const response = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify({
				operationData: {...data, date: curDate, amount: '$13.44'},
				orderId: uuidv4(),
				clientId
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    const account = await fetch(`api/accounts/${clientId}`)
    const acc = await account.json()
    const newAmount = (+acc.account.amount) - (13.44)
    
    await fetch(`/api/accounts/${acc.account.accountId}`, {
      method: 'POST',
      body: JSON.stringify({
        ...acc.account, amount: newAmount+'',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

		
		const res = await response.json()
    dispatch(updateGridData(res.data))
    dispatch(clearPaymentData())
	}
}

const updateGridData = (data: any) => {
	return {
		type: ActionTypes.UPDATEGRIDTDATA,
		data
	}
}

const clearPaymentData = () => {
  return {
    type: ActionTypes.CLEARPAYMENTDATA,
    data: {}
  }
}
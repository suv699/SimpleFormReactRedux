import { ActionTypes } from "../types"

const initialState = {
	activeStep: 0
}

export const orderReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ActionTypes.PREVSTEP:
		case ActionTypes.NEXTSTEP: return {
			...state, activeStep: action.step
		}
		case ActionTypes.UPDATEPAYMENTDATA: return {
			...state,
			...action.data
		}
		default: return state
	}
}
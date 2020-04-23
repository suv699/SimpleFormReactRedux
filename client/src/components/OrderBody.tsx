import React from 'react'
import AddressForm from '../containers/AddressForm'
import PaymentForm from '../containers/PaymentForm'
import Review from '../containers/Review'

interface IProps {
  activeStep: number
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error('Unknown step')
  }
}

export const OrderBody: React.FC<IProps> = ({activeStep}) => {
  return <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
}

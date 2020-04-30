import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Balance from '../components/Balance'
import {getAccount} from '../actions/authAction'

function BalanceUI(props: any) {
  useEffect(() => {
    if (props.account && !props.account.amount) {
      props.gatAccount()
    }
  })
  return <Balance currency={props.account.currency} amount={props.account.amount} toggleRefresh={props.gatAccount} />
}

const mapStateToProps = (state: any) => {
  return {
    account: state.account,
  }
}
const getUserId = () => {
  const d = JSON.parse(localStorage.getItem('userData') as string)
  return d.userId
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    gatAccount: () => {
      dispatch(getAccount(getUserId()))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceUI)

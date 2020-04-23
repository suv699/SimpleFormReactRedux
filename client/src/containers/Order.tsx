import React, {useEffect} from 'react'

import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {FinalOrder} from '../components/FinalOrder'
import {MyStepper} from '../components/MyStepper'
import {OrderBody} from '../components/OrderBody'
import {connect} from 'react-redux'
import {nextStep, prevStep, createOrder} from '../actions/order'
import {OrderFooter} from '../components/OrderFooter'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}))

const steps = ['Shipping address', 'Payment details', 'Review your order']

interface IProps {
  activeStep: number
  setNextStep(step: number): any
  setPrevStep(step: number): any
  create(data: any): any;
  form: object;
}

const Order: React.FC<IProps> = ({activeStep, setNextStep, setPrevStep, create, form}) => {
  const classes = useStyles()
  const handleNext = () => {
    setNextStep(activeStep)
  }

  const handleBack = () => {
    setPrevStep(activeStep)
  }
  useEffect(() => {
    if (activeStep === steps.length) {
      create(form)
    }
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            New Order
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <MyStepper activeStep={activeStep} steps={steps} />

          <React.Fragment>
            {activeStep === steps.length ? (
              <FinalOrder
                title={'Thank you for your order.'}
                text={
                  'Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.'
                }
              />
            ) : (
              <React.Fragment>
                <OrderBody activeStep={activeStep} />
                <OrderFooter activeStep={activeStep} steps={steps} handleBack={handleBack} handleNext={handleNext} />
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => {
  return {
    activeStep: state.order.activeStep,
    form: state.order,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setNextStep: (step: number) => {
      dispatch(nextStep(step))
    },
    setPrevStep: (step: number) => {
      dispatch(prevStep(step))
    },
    create: (data: any) => {
      dispatch(createOrder(data))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)

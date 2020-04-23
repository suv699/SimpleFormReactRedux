import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'
import { updatePaymentAttr } from '../actions/order'

const PaymentForm: React.FC = ({form, changeHandler}: any) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cardNumber" 
            name="cardNumber"
            label="Card number" 
            value={form.cardNumber}
            onChange={changeHandler}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="expDate" 
            name="expDate"
            label="Expiry date" 
            value={form.expDate}
            onChange={changeHandler}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="cvv" 
            name="cvv"
            label="CVV" 
            value={form.cvv}
            onChange={changeHandler}
            helperText="Last three digits on signature strip" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => {
  return {
    form: state.order,
  }
}

const mapDispatchToState = (dispatch: any) => {
  return {
    changeHandler: (event: any) => {
      dispatch(updatePaymentAttr({[event.target.name]: event.target.value}))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToState)(PaymentForm)

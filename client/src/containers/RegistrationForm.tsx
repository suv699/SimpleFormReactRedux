import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

import {Message} from '../components/Alert'
import {Title} from '../components/Title'
import {emptyField} from '../actions/app'
import {onChangeFieldReg, registerAction} from '../actions/registr/regAction'
import {IUserRegistration} from '../models/user-info'

import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const RegistrationForm = (props: any) => {
  const classes = useStyles()

  const handlerRegistration = (e: any) => {
    try {
      props.regAction(props.formUserData)
    } catch (e) {
      console.log(e.message)
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    props.onChangeFieldReg(event.target.name, event.target.value)
  }
  return (
    <div>
      {props.appData.isMsg && <Message text={props.message.text} mode={props.message.mode} />}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Title title="Registration"></Title>
          <ValidatorForm className={classes.form} onSubmit={handlerRegistration} onError={() => props.emptyField()}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={props.formUserData.name}
              autoComplete="name"
              onChange={onChangeHandler}
              disabled={props.appData.disabled}
              validators={['required']}
              errorMessages={['field is required']}
              autoFocus
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="lastName"
              label="LastName"
              type="lastName"
              id="lastName"
              value={props.formUserData.lastName}
              onChange={onChangeHandler}
              disabled={props.appData.disabled}
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="login"
              label="Login"
              name="login"
              value={props.formUserData.login}
              autoComplete="login"
              onChange={onChangeHandler}
              disabled={props.appData.disabled}
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={props.formUserData.password}
              onChange={onChangeHandler}
              disabled={props.appData.disabled}
              autoComplete="current-password"
              validators={['required']}
              errorMessages={['field is required']}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={props.formUserData.email}
              onChange={onChangeHandler}
              disabled={props.appData.disabled}
              autoComplete="email"
              validators={['isEmail']}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={props.appData.disabled}>
              Registration
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/">Sign In</NavLink>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    formUserData: state.regData,
    appData: state.appData,
    message: state.appData.message,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    regAction: (data: IUserRegistration) => {
      dispatch(registerAction(data))
    },
    onChangeFieldReg: (name: string, value: string) => {
      dispatch(onChangeFieldReg(name, value))
    },
    emptyField: () => {
      dispatch(emptyField())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

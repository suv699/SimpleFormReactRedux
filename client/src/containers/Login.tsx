import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {authAction, onChangeFieldAuth} from '../actions/auth/authAction'
import {Message} from '../components/Alert'
import {emptyField} from '../actions/app'
import {Title} from '../components/Title'
import {IUserData} from '../models/user-info'

import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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

function Login(props: any) {
  const classes = useStyles()
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeFieldAuth(event.target.name, event.target.value)
  }
  const handleLogIn = async () => {
    try {
      const {login, password} = props.authData
      props.logIn({login, password})
    } catch (e) {
      console.log('Ошибка авторизации')
    }
  }
  return (
    <div>
      {props.appData.isMsg && <Message text={props.message.text} mode={props.message.mode} />}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Title title="Sign in"></Title>
          <ValidatorForm className={classes.form} onSubmit={handleLogIn} onError={() => props.emptyField()}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              id="login"
              label="Login"
              name="login"
              value={props.authData.login}
              onChange={onChangeHandler}
              autoComplete="login"
              disabled={props.disabled}
              validators={['required']}
              errorMessages={['field is required']}
              autoFocus
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              value={props.authData.password}
              onChange={onChangeHandler}
              label="Password"
              type="password"
              disabled={props.disabled}
              validators={['required']}
              errorMessages={['field is required']}
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              disabled={props.disabled}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={props.disabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/registration">
                  Registration
                </NavLink>
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
    authData: state.auth,
    appData: state.appData,
    message: state.appData.message    
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (data: IUserData) => {
      dispatch(authAction(data))
    },
    onChangeFieldAuth: (name: String, value: String) => {
      dispatch(onChangeFieldAuth(name, value))
    },
    emptyField: () => {
      dispatch(emptyField())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
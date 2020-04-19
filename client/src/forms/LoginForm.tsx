import React from 'react'
import {NavLink} from "react-router-dom";
import {IUserData} from "../models/user-info";
import {connect} from "react-redux";
import {authAction, onChangeFieldAuth} from "../actions/auth/authAction";
import {Message} from "../components/Alert";

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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

function LoginForm(props: any) {
  const classes = useStyles()
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeFielAuth(event.target.name, event.target.value)
  }
  const handleLogIn = async () => {
    try {
      props.logIn(props.authData)
    } catch (e) {

    }
  }
  return (
    <div>
      {props.isMsg && <Message text={props.text} mode={props.mode} />}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              value={props.authData.login}
              onChange={onChangeHandler}
              autoComplete="login"
              disabled={props.disabled}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={props.authData.password}
              onChange={onChangeHandler}
              label="Password"
              type="password"
              disabled={props.disabled}
              id="password"
              autoComplete="current-password"
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
              onClick={handleLogIn}
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
          </div>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isMsg: state.appData.isMsg,
    text: state.appData.text,
    mode: state.appData.mode,
    disabled: state.appData.disabled,
    authData: state.auth
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (data: IUserData) => {
      dispatch(authAction(data))
    },
    onChangeFielAuth: (name: String, value: String) => {
      dispatch(onChangeFieldAuth(name, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
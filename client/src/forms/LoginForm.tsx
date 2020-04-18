import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {IUserData} from "../models/user-info";
import {connect} from "react-redux";
import {authAction} from "../actions/auth/authAction";

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
  const {request, error, clearError} = useHttp()

  let state: IUserData = {
    login: '',
    password: ''
  }
  const [stateData, setStateData] = useState<IUserData>(state);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setStateData(prevState => (
      {
        ...prevState,
        ...{[event.target.name]: event.target.value}
      }
    ))
  }

  const handleLogIn = async () => {
    try {
      props.logIn(stateData)
    } catch (e) {

    }
  }

  return (
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
            value={stateData.login}
            onChange={onChangeHandler}
            autoComplete="login"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={stateData.password}
            onChange={onChangeHandler}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogIn}
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
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (data: IUserData) => {
      dispatch(authAction(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
import React, {useState} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {registerAction} from "../actions/redistr/regAction";
import {IUserData} from "../models/user-info";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

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
}));

const RegistrationForm = (props: any) => {
  const classes = useStyles();

  let state: IUserData = {
    login: '',
    password: '',
    email: ''
  }

  const [stateData, setStateData] = useState<IUserData>(state);

  const handlerRegistration = () => {
    console.log('---', stateData)
    props.regAction(stateData)
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setStateData(prevState => (
      {
        ...prevState,
        ...{[event.target.name]: event.target.value}
      }
    ))
  }
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            value={stateData.login}
            autoComplete="login"
            onChange={onChangeHandler}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={stateData.password}
            onChange={onChangeHandler}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={stateData.email}
            onChange={onChangeHandler}
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlerRegistration}
          >
            Registration
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/">
                Sign In
              </NavLink>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

/*const mapStateToProps = (state: any) => {
  return {
    formData: state.registr
  }
}*/
const mapDispatchToProps = (dispatch: any) => {
  return {
    regAction: (data: IUserData) => {
      dispatch(registerAction(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(RegistrationForm)
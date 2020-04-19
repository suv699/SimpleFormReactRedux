import React from 'react';
import {connect} from "react-redux";
import {Logout} from "../actions/auth/authAction";
import {useHistory} from "react-router";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function NavBar(props: any) {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <Button color="inherit" onClick={() => {history.push('/')}}>Welcome</Button>
          <Button color="inherit" onClick={() => {history.push('/about')}}>About</Button>
          <Button color="inherit" onClick={()=>{props.logout()}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(Logout())
    }
  }
}
export default connect(null, mapDispatchToProps)(NavBar)
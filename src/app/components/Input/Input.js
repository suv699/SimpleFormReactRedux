import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px'
    }
  }));

export default function MyInput(props) {
    // const {title, type, value} = props;
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const toggleChange = (e) => {
        setName(e.target.value);
        if (typeof props.onChange === 'function') {
            props.onChange(e.target);
        }
    }
    const {type, title} = props;
  return (
      <div className={classes.root}>
        <TextField
            id={type}
            label={title}
            type={type}
            value={name}
            name={type}
            onChange={toggleChange}
            required
            />
      </div>
  );
}

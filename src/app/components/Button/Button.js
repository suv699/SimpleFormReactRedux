import React from 'react';
import Button from '@material-ui/core/Button';


export const MyButton = function (props) {
    const { title, onClick } = props;
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {title}
    </Button>
  );
}

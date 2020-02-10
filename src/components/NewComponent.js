import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


export const NewComponent = function () {
  return (
    <Button variant="contained" color="primary" onClick={()=>console.log('click')}>
      Hello World
    </Button>
  );
}

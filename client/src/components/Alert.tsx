import React from 'react'
import Alert from '@material-ui/lab/Alert';

export const Message = (props: any) => {
  return (
    <div>
      <Alert severity={props.mode}>{props.text}</Alert>
    </div>
  )
}
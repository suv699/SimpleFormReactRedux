import React from 'react'

import Alert from '@material-ui/lab/Alert'

type TMessage = 'success' | 'info' | 'warning' | 'error' | undefined

interface IMessage {
  text: string;
  mode: TMessage
}
export const Message = (props: IMessage) => {
  return (
    <div>
      <Alert severity={props.mode}>{props.text}</Alert>
    </div>
  )
}

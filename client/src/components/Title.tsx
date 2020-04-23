import React from 'react'

import {Typography} from '@material-ui/core'

interface IProps {
  title: string;
}
export const Title = (props: IProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.title}
    </Typography>
  )
}

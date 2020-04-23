import React from 'react'
import {Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

interface IProps {
  title: string
  text: string
}
export const FinalOrder: React.FC<IProps> = ({title, text}) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1">{text}</Typography>
      <NavLink to="/">Close</NavLink>
    </React.Fragment>
  )
}

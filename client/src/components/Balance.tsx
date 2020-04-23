import React from 'react'

import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

function preventDefault(event: any) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export default function Balance(props: any) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Typography>Recent Deposits</Typography>
      <Typography component="p" variant="h4">
        {/*$3,024.00*/}
        {props.currency} {props.amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {(new Date().toDateString())}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}
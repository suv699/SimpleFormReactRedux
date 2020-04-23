import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))


interface IProps {
	activeStep: number;
	steps: string[];
	handleNext(): void;
	handleBack(): void;
}

export const OrderFooter: React.FC<IProps> = ({activeStep, steps, handleBack, handleNext}) => {
	const classes = useStyles()
	return (
    <React.Fragment>
      <div className={classes.buttons}>
        {activeStep !== 0 && (
        <Button onClick={handleBack} className={classes.button}>
         Back
        </Button>
      )}
        <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
          {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
        </Button>
      </div>
    </React.Fragment>
	)
}
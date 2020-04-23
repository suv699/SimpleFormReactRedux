import React from 'react'
import { Step, StepLabel, makeStyles, Stepper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  }
}))

interface IProps {
	activeStep: number;
	steps: string[];
}
export const MyStepper:React.FC<IProps> = ({activeStep, steps}) => {
	const classes = useStyles()
	return (
		<Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
	)
}
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from '../containers/LoginForm'
import RegistrationForm from '../containers/RegistrationForm'
import Welcome from './Welcome'
import Order from './Order'
import About from './About'

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/welcome" exact component={Welcome}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to="/welcome" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact component={LoginForm}></Route>
      <Route path="/registration" component={RegistrationForm}></Route>
      <Redirect to="/" />
    </Switch>
  )
}

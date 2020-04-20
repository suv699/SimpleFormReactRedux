import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginForm} from "../forms/LoginForm"
import {RegistrationForm} from "../forms/RegistrationForm"
import Welcome from '../forms/Welcome';
import Order from '../forms/Order';
import About from '../forms/About';

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

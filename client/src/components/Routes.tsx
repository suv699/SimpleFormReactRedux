import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from "../forms/LoginForm"
import RegistrationForm from "../forms/RegistrationForm"
import Welcome from "../forms/Welcome";
import Contacts from "../forms/Contacts";
import About from "../forms/About";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/welcome" exact component={Welcome}></Route>
        <Route path="/contacts" component={Contacts}></Route>
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

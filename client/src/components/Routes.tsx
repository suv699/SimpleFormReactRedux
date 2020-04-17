import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from "../forms/LoginForm"
import RegistrationForm from "../forms/RegistrationForm"

export const useRoutes = (isAuthenticated: any) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          {/*<LinksPage />*/}
        </Route>
        <Route path="/create" exact>
          {/*<CreatePage />*/}
        </Route>
        <Route path="/detail/:id">
          {/*<DetailPage />*/}
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <LoginForm />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

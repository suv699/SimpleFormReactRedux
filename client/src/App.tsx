import React from 'react'
import {useRoutes} from './components/Routes'
import {BrowserRouter} from 'react-router-dom'
import {useSelector} from 'react-redux'
import NavBar from './containers/NavBar'

function App() {
  // @ts-ignore
  const isAuthenticated: boolean = useSelector(state => state.auth.isAuthenticated)
  const routes = useRoutes(isAuthenticated)
  return (
    <div className="App">
      <BrowserRouter>
        { isAuthenticated && <NavBar /> }
        {routes}
      </BrowserRouter>
    </div>
  )
}

export default App

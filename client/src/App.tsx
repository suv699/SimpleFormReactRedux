import React from 'react'
import {useRoutes} from "./components/Routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  const isAuthenticated: boolean = false
  const routes = useRoutes(isAuthenticated)
  return (
    <div className="App">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  )
}

export default App

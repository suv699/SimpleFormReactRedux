import React from 'react'
import { render } from 'react-dom'
import LoginForm from './app/forms/LoginForm'
// import { Provider } from 'react-redux'
import './index.css';

// import Greeting from './components/Greeting';
// import store from './store/store'

render(
  <LoginForm />,
  document.getElementById('root')
)
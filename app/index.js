import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Greeting from './components/Greeting';
import store from './store/store'

render(
  <Provider store={store}>
    <Greeting />
  </Provider>,
  document.getElementById('root')
)
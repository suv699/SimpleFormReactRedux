import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Greeting from './components/Greeting';
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
render(
  <Provider store={store}>
    <Greeting />
  </Provider>,
  document.getElementById('root')
)
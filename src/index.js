import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'

import App from "./containers/app"

const target = document.querySelector('#root')
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)

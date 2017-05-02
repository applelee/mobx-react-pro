import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'
import { observer,Provider } from 'mobx-react'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import App from './components/App'
import allMobx from './mobx'

ReactDOM.render(
  <Provider {...allMobx}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

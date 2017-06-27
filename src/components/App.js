import React,{ Component } from 'react'
import { Route,Link } from 'react-router-dom'

import Nav from './modules/Nav'
import Header from './modules/Header'
import Footer from './modules/Footer'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'

const App = ({ history }) => (
  <div>
    {/* 头部栏 */}
    <Header />

    {/* 导航栏 */}
    <Nav />

    {/* 路由 */}
    <Route exact path='/' component={Test1} />
    <Route path='/test1' component={Test1} />
    <Route path='/test2' component={Test2} />

    {/* 底部栏 */}
    <Footer />
  </div>
)

export default App

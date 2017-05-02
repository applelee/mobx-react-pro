import React,{ Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'

export default () => (
  <div>
    {/* 导航 */}
    <li><Link to='/test1'>test1</Link></li>
    <li><Link to='/test2'>test2</Link></li>
    <hr/>

    {/* 路由 */}
    <Route exact path='/' component={Test1} />
    <Route path='/test1' component={Test1} />
    <Route path='/test2' component={Test2} />
  </div>
)

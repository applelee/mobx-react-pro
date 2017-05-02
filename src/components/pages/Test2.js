import React,{ Component } from 'react'
import { observer,inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import Test1 from '../pages/Test1'
import Test2 from '../pages/Test2'

export default inject(['testMobx'])(observer(({testMobx}) =>
  <div>
    <li><Link to='/test1'>test1111</Link></li>
    <li><Link to='/test2'>test2222</Link></li>
    <li><div to='/test1'>test111 async</div></li>
    <div onClick={testMobx.changeName}>点击</div>
    {testMobx.allName}
  </div>
))

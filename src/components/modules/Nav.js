import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className='nav'>
    <li><Link to='/test1'>test1</Link></li>
    <li><Link to='/test2'>test2</Link></li>
  </div>
)

export default Nav
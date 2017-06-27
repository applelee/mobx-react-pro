import React,{ Component } from 'react'
import { observer,inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import request from 'superagent'

@inject('testMobx') @observer
class Button extends React.Component {
  componentDidMount(){
    this.props.testMobx.getData('/api/test')
  }

  render() {
    const testMobx = this.props.testMobx
    
    return (
      <div>
        <div className='button' onClick={testMobx.changeName}>点击</div>
        {testMobx.allName}
      </div>
    );
  }
}

export default Button

import React,{ Component } from 'react'
import { observer,inject } from 'mobx-react'

export default inject(['testMobx'])(observer(({testMobx,history}) =>
  <div>
    {`${testMobx.name} fasdf`}
    <div onClick={() => {testMobx.goNextPage(history)}}>click home</div>
  </div>
))

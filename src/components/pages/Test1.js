import React,{ Component } from 'react'
import { observer,inject } from 'mobx-react'

// @inject("testMobx") @observer
const Test1 = inject('testMobx')(observer(({testMobx,history}) =>
  <div>
    {`${testMobx.name} fasdf`}
    <div className='button' onClick={() => {testMobx.goNextPage(history)}}>click home</div>
  </div>
))

// const Test1 = observer(({testMobx,history}) =>
//   <div>
//     {`${testMobx.name} fasdf`}
//     <div onClick={() => {testMobx.goNextPage(history)}}>click home</div>
//   </div>
// )

export default Test1

import { observable,action } from 'mobx'

export default observable({
  name:'mama',
  get allName(){
    return this.name + ' baba'
  },
  changeName:action.bound(function(){
    this.name = 'lalalallaala'
  }),
  goNextPage(history){
    return history.push('/')
  },
})

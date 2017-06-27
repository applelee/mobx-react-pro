import { observable,computed,action } from 'mobx'
import request from 'superagent'

// 不使用指令例子
// export default observable({
//   name:'mama',
//   get allName(){
//     return this.name + ' baba'
//   },
//   changeName:action.bound(function(){
//     this.name = 'lalalallaala'
//   }),
//   goNextPage(history){
//     return history.push('/')
//   },
// })

class TestMobx {
    @observable name = 'baba'
    @observable amount = 1

    @computed get allName() {
        return this.name + ' baba'
    }

    @action.bound
    changeName(){
      this.name = 'lalalallaala'
    }

    goNextPage(history){
      return history.push('/')
    }

    getData(url){
        request
            .get('http://127.0.0.1:3300' + url)
            .end((err,res) => {
                console.log(res)
            })
    }
}

export default new TestMobx

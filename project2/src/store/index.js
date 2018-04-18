import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


//Store modules模块化,用于数据量庞大
/*const moduleA = {
    state: {
      count : 50
    },
  mutations: {},
  actions: {},
  getters: {}
}

const moduleB = {
    state: {
      count : 20
    },
  mutations: {},
  actions: {},
  getters: {}
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store;*/



//mock 数据
let shopList = [
  {
    id : 123,
    count : 15
  },
  {
    id : 456,
    count : 20
  }
]

const store = new Vuex.Store({
    state : {
      shopList,
      count : 10
    },
    getters :{
        totals(state){
          return state.shopList.reduce((n, item) => n + item.count, 0);
        }
    },
    mutations : {    //改变状态必须提交mutations
      updataCount(state, plyload){
        let item = state.shopList.find(item => plyload.id == item.id);
        if(plyload.type == 'up'){
           item.count ++;
        }
        else{
          item.count --;
        }
      }
    },
    actions : {     //处理一步操作必须放在actions
      yibuFn(store, prarms){
          setTimeout(()=>{
            //提交mutations
            store.commit('updataCount', prarms);
          },3000)
      }
    }
})

export default store;

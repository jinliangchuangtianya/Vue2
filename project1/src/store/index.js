import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义store
//Vuex中的状态是响应的
const store = new Vuex.Store({
    state : {
      count : 10    //定义一个状态
    },
    mutations : {   //改变state的状态
      updataCount(state, payload){
          state.count += payload.add;
      }
    }
})

export default store;

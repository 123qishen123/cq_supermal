import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 如果导入的东西太多，可以直接像下面的方式全部导入，然后从types里面取即可
// import * as types from './mutations-type'

Vue.use(Vuex)

const state = {
    count: 100,
    students: [
        { id: 1, name: 'a', age: 25 },
        { id: 2, name: 'b', age: 12 },
        { id: 3, name: 'c', age: 26 },
        { id: 4, name: 'd', age: 31 },
    ],
    userInfo: { name: '小明', age: 20, height: 1.65 }
}

const store = new Vuex.Store({
    // 数据源
    state,
    mutations,
    // 如果有异步操作，一定要经过actions，用actions去触发mutations，然后再由mutations去更新state
    actions,
    // 用户对数据进行一些数据后返回展示
    getters,
    modules: {
        a: moduleA
    }
})
export default store
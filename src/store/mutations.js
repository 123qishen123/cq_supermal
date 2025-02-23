import {INCREMENT,DECREMENT,ADDNUM,ADDSTUDENT,UPDATEINFO} from './mutations-type'
export default {
    [INCREMENT](state) {
        state.count++
    },
    [DECREMENT](state) {
        state.count--
    },
    // 第一种接收方式
    // addNum(state,age){
    //     // state.count += age
    // },
    // 第二种接收方式
    [ADDNUM](state, payload) {
        console.log(payload)
        state.count += payload.age
    },
    [ADDSTUDENT](state, stu) {
        state.students.push(stu);
    },
    [UPDATEINFO](state) {
        state.userInfo.name = '哈哈'
        // state.userInfo['address'] = '上海'  // Vue2添加对象属性无法响应式，vue3可以
        // Vue.set(state.userInfo, 'address', '上海')
        // delete state.userInfo.name  // Vue2删除对象属性无法响应式，vue3可以
        // Vue.delete(state.userInfo, 'name')
    }
}
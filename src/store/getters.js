export default {
    getPower(state) {
        return state.count * state.count
    },
    getAgeMore20(state) {
        return state.students.filter(stu => stu.age > 20)
    },
    getLength(state, getters) {
        return getters.getAgeMore20.length
    },
    // 如果想获取别人传递的参数，需要返回一个函数，在调用的地方传一个参数，然后这里可以接收这个参数
    getAgeLength(state) {
        return function (age) {
            return state.students.filter(stu => stu.age > age).length
        }
    }
}
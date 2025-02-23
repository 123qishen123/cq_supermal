<template>
    <div id="homeWrapper">
        首页
        <div>{{ $store.state.count }}</div>
        <div>{{ $store.getters.getPower }}</div>
        <div>{{ $store.getters.getAgeMore20 }}</div>
        <div>{{ $store.getters.getLength }}</div>
        <div>{{ $store.getters.getAgeLength(30) }}</div>
        <div>{{ $store.state.userInfo }}</div>
        <button @click="add">增加</button>
        <button @click="reduce">减少</button>
        <button @click="addStu">增加一个学生</button>
        <button @click="addNum(5)">数字增加5</button>
        <button @click="addNum(10)">数字增加10</button>
        <button @click="updateInfo">信息增加一个地址</button>
        <button @click="asyncUpdateInfo">异步修改名字</button>
    </div>

</template>

<script>
import { INCREMENT, DECREMENT, ADDNUM, ADDSTUDENT, UPDATEINFO } from 'store/mutations-type'
export default {
    name: 'Home',
    methods: {
        add() {
            // 通过commit来触发mutations中能够的方法去更新state
            this.$store.commit(INCREMENT)
        },
        reduce() {
            this.$store.commit(DECREMENT)
        },
        addNum(age) {
            // 1. 普通的提交方式
            // this.$store.commit('addNum',age)
            // 2.另一种提交方式
            this.$store.commit({
                type: ADDNUM,
                age
            })
        },
        addStu() {
            const stu = { id: 10, name: '哈哈', age: 41 }
            // 第二个参数叫做payload，如果想传递多个参数，可以放到一个对象中进行传递
            this.$store.commit(ADDSTUDENT, stu)
        },
        updateInfo() {
            this.$store.commit(UPDATEINFO)
        },
        asyncUpdateInfo() {
            // 1. 先通过dispatch触发actions中的方法
            // 注意：dispatch可以返回一个promise
            // this.$store.dispatch('aUpdateInfo', '我是异步传入的参数')
            this.$store.dispatch('aUpdateInfo', '我是异步传入的参数')
            .then(res => console.log('里面已经完成了',res))
        }
    }
}
</script>

<style scoped></style>
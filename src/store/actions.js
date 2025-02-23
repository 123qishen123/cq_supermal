export default {
    // context就是store对象
    // aUpdateInfo(context,payload){
    //     // 2.actions中的方法再通过commit触发mutations中的方法，让mutations去更新state
    //     setTimeout(() => {
    //         context.commit(UPDATEINFO)
    //     },1000)
    //     console.log(payload)
    // },

    // 里面可以返回一个Promise，这样dispatch就可以通过then来接收这个promise的回调
    aUpdateInfo(context,payload){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload)
                resolve('123456')
            },1000)
        })
    }
}
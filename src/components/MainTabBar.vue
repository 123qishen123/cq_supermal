<template>
    <!-- 通过import方式导入的文件可以直接用别名，但是像图片是通过src导入的，前面要加~ -->
    <div id="mainTabBar">
        <TabBar>
            <TabBarItem path="/home" activeColor="red">
                <img slot="slot-icon" src="~assets/img/tabbar/cc-home.png" alt="">
                <img slot="slot-icon-active" src="~assets/img/tabbar/cc-home (1).png" alt="">
                <div class="text" slot="slot-text">首页</div>
            </TabBarItem>
            <TabBarItem path="/category" activeColor="red">
                <img slot="slot-icon" src="~assets/img/tabbar/category.png" alt="">
                <img slot="slot-icon-active" src="~assets/img/tabbar/category (1).png" alt="">
                <div class="text" slot="slot-text">分类</div>
            </TabBarItem>
            <TabBarItem path="/shopCart" activeColor="red">
                <img slot="slot-icon" src="~assets/img/tabbar/shop-cart-1.png" alt="">
                <img slot="slot-icon-active" src="~assets/img/tabbar/shop-cart-1 (1).png" alt="">
                <div class="text" slot="slot-text">购物车</div>
            </TabBarItem>
            <TabBarItem path="/profile" activeColor="red">
                <img slot="slot-icon" src="~assets/img/tabbar/profile.png" alt="">
                <img slot="slot-icon-active" src="~assets/img/tabbar/profile (1).png" alt="">
                <div class="text" slot="slot-text">我的</div>
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped></style>
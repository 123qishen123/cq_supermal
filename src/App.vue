<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>

import MainTabBar from 'components/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style scoped>
@import 'assets/css/base.css';
</style>

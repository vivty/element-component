<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-size: 14px;
  font-weight: normal;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>

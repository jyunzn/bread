<template>
  <div id="app">
    <h3>展示 $route.matched 匹配到的路徑</h3>
    <pre>
      {{ matchPaths }}
    </pre>
    <div>
      <h3>展示用的操作按鈕區</h3>
      <router-link to="/">go to index</router-link><br/>
      <router-link to="/home">go to home</router-link><br/>
      <router-link to="/home/user">go to user</router-link>
    </div>
    <hr/>
    <h3>展示效果</h3>
    <router-link v-for="r of $route.matched" :key="r.name" :to="r.path || '/'">{{ r.name || '/' }} ></router-link>
    <router-view></router-view>
  </div>
</template>
<script>


export default {
    computed: {
      matchPaths() {
        return this.$route.matched.map(r => r.path)
      }
    }
}
</script>


<template>
  <div id="app">
    <router-link to="/help">Help</router-link> |
    <router-link to="/todos">Todos</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {}
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page-title {
  font-size: 25px;
  line-height: 50px;
  font-weight: bold;
}

input {
  padding: 3px;
}
</style>

<template>
  <div id="app">
    <div class="app-header">Todo App</div>
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
body {
  background-color: #fafafa;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-header {
  background-color: #2196f3;
  color: white;
  line-height: 50px;
  text-align: left;
  padding-left: 7px;
  font-size: 21px;
}

.page-title {
  margin-top: 20px;
  font-size: 25px;
  line-height: 50px;
  font-weight: bold;
}

input {
  padding: 3px;
  background-color: transparent;
  border: none !important;
  border-color: none !important;
  border-bottom: 1px solid darkgray !important;
  &:active {
    border: none;
    border-bottom: 1px solid darkgray;
  }
}
</style>

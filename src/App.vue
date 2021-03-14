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
@import "./style";
</style>

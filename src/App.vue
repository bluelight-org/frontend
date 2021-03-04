<template>
  <!-- defined base app -->
  <div id="app">
    <!-- router outlet component -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Router from './Router';

  export default {
    name: 'app',

    // define router for app
    router: Router
  }
</script>

<style>

</style>

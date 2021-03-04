<template>
  <!-- defined base app -->
  <div id="app">
    <!-- router outlet component -->
    <router-view></router-view>
    <notifications group="notification" position="bottom right" />
  </div>
</template>

<script lang="ts">
import Router from "./Router";
import { CookieService } from "./services/CookieService";

export default {
  name: "app",

  created(): void {
    // set color scheme
    const colorScheme = new CookieService().getColorScheme();
    document.body.style.backgroundColor = colorScheme.background;
    document.body.style.color = colorScheme.textColor;
  },

  // define router for app
  router: Router
};
</script>

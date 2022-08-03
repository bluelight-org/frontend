<template>
  <!-- defined base app -->
  <div id="app">
    <!-- router outlet component -->
    <router-view></router-view>
    <notifications group="notification" position="bottom right" />
    <ThemeToggler v-if="themeTogglerEnabled"></ThemeToggler>
  </div>
</template>

<script lang="ts">
import Router from "./Router";
import { getColorScheme } from "./services/StorageService";
import ThemeToggler from "@/components/ThemeToggler.vue";
import getConfiguration from "@/services/ConfigurationHandler";

export default {
  name: "app",
  components: { ThemeToggler },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      themeTogglerEnabled: getConfiguration().themeTogglerEnabled
    };
  },
  created(): void {
    // set color scheme
    const colorScheme = getColorScheme();
    document.body.style.backgroundColor = colorScheme.background;
    document.body.style.color = colorScheme.textColor;
  },

  // define router for app
  router: Router
};
</script>

<template>
  <div class="togglerCard" :style="'background: ' + togglerColor">
    <button
      class="togglerButton"
      :style="
        'background: ' +
          togglerColor +
          ';filter: ' +
          getToggleButtonFilter('light')
      "
      v-on:click="changeTheme('light')"
    >
      <font-awesome-icon :icon="lightIcon" :fixed-width="true" />
    </button>
    <button
      class="togglerButton"
      :style="
        'background: ' +
          togglerColor +
          ';filter: ' +
          getToggleButtonFilter('dark')
      "
      v-on:click="changeTheme('dark')"
    >
      <font-awesome-icon
        :icon="darkIcon"
        size="3x"
        spin
        fixed-width
      ></font-awesome-icon>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import {
  ThemeTogglerData,
  ThemeTogglerMethods
} from "../../typings/components/ThemeToggler";
import { DefaultProps } from "vue/types/options";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default Vue.extend<ThemeTogglerData, ThemeTogglerMethods, DefaultProps>({
  name: "ThemeToggler",
  data() {
    const colorScheme = getColorScheme();
    return {
      // Colors
      togglerColor: colorScheme.themeTogglerColor,
      lightIcon: faSun,
      darkIcon: faMoon
    };
  },
  methods: {
    getActiveColorScheme(): string {
      const scheme = localStorage.getItem("color-scheme");
      return scheme === null ? "light" : scheme;
    },
    getToggleButtonFilter(theme: string): string {
      if (this.getActiveColorScheme() === theme) return "brightness(1.6)";
      else return "none";
    },
    changeTheme(theme: string): void {
      if (this.getActiveColorScheme() !== theme) {
        localStorage.setItem("color-scheme", theme);
        location.reload();
      }
    }
  }
});
</script>

<style scoped>
.togglerCard {
  width: fit-content;
  height: fit-content;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  z-index: -1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1em;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
}
.togglerButton {
  width: 75px;
  height: 75px;
  border-radius: 5px;
  background: none;
  border: none;
}
</style>

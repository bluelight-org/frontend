<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    :style="{ backgroundColor: navbarColor }"
  >
    <a class="navbar-brand" href="/dashboard">
      <img
        src="@/assets/logo.png"
        width="50"
        height="50"
        class="img-radius"
        alt=""
        loading="lazy"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li :class="['nav-item', this.active === 'dashboard' ? 'active' : '']">
          <a class="nav-link" @click="$router.push('Dashboard')">
            Dashboard <span class="sr-only">(current)</span>
          </a>
        </li>
        <li :class="['nav-item', this.active === 'alert' ? 'active' : '']">
          <a class="nav-link" @click="$router.push('Alert')">
            Alert <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import {
  NavbarData,
  NavbarMethods,
  NavbarProps
} from "typings/components/Navbar";
import { DefaultComputed } from "vue/types/options";

export default Vue.extend<
  NavbarData,
  NavbarMethods,
  DefaultComputed,
  NavbarProps
>({
  name: "Navbar",
  data() {
    const colorScheme = getColorScheme();

    return {
      navbarColor: colorScheme.navbarColor
    };
  },
  methods: {},

  props: {
    active: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.img-radius {
  border-radius: 5px;
}
</style>

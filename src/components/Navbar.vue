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
        <li class="nav-item" id="navbar-dashboard">
          <a class="nav-link" href="/dashboard"
            >Dashboard <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
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

export default Vue.extend<NavbarData, NavbarMethods, NavbarProps>({
  name: "Navbar",
  data() {
    const colorScheme = getColorScheme();

    return {
      // Colors
      navbarColor: colorScheme.navbarColor
    };
  },
  methods: {},

  mounted: function() {
    console.log(this.active);
    this.$nextTick(function() {
      console.log(this.active);
      const el = document.getElementById("navbar-" + this.active);
      if (el === null) alert("Fehler beim laden der navbar");
      else el.classList.add("active");
    });
  }
});
</script>

<style scoped>
.img-radius {
  border-radius: 5px;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="/dashboard">
      <img
        src="/logo.png"
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
        <li
          v-for="item of navbarItems"
          v-bind:key="item.id"
          :class="['nav-item', active === item.id ? 'active' : '']"
        >
          <a class="nav-link" @click="$router.push(item.route)">
            {{ $t(`routes.${item.id}`) }} <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <ProfileDropdown />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import {
  NavbarData,
  NavbarMethods,
  NavbarProps
} from "typings/components/Navbar";
import { DefaultComputed } from "vue/types/options";
import ProfileDropdown from "@/components/ProfileDropdown.vue";

export default Vue.extend<
  NavbarData,
  NavbarMethods,
  DefaultComputed,
  NavbarProps
>({
  name: "Navbar",
  components: { ProfileDropdown },
  data() {
    return {
      navbarItems: [
        { id: "dashboard", route: "Dashboard" },
        { id: "alert", route: "Alert" }
      ]
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
.nav-link {
  cursor: pointer;
}
.navbar {
  background-color: var(--navbarColor);
}
</style>

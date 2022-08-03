<template>
  <div class="profile-select dropdown">
    <img
      src="default-pp.png"
      alt="profile picture"
      class="dropdown-toggle"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    />
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a
        v-for="item in dropdownItems"
        class="dropdown-item"
        :key="item.id"
        :href="item.route"
      >
        {{ $t(`routes.${item.id}`) }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ProfileDropdownData,
  ProfileDropdownMethods
} from "typings/components/ProfileDropdown";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<
  ProfileDropdownData,
  ProfileDropdownMethods,
  DefaultProps
>({
  name: "ProfileDropdown",

  data() {
    return {
      dropdownItems: [{ id: "settings", route: "Settings" }]
    };
  },
  methods: {}
});
</script>

<style scoped>
.profile-select {
  align-self: flex-end;
}
.profile-select img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: white;
}
.dropdown-menu {
  transform: translate(-75%, 0px);
  background-color: var(--dropdownColor);
}
</style>

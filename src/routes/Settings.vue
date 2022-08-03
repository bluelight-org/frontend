<template>
  <div>
    <navbar active=""></navbar>
    <div class="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import { SettingsData, SettingsMethods } from "typings/routes/Settings";
import { DefaultProps } from "vue/types/options";
import Navbar from "@/components/Navbar.vue";
export default Vue.extend<SettingsData, SettingsMethods, DefaultProps>({
  name: "Settings",
  components: { Navbar },
  data() {
    const colorScheme = getColorScheme();
    return {};
  },

  methods: {}
});
</script>

<style scoped></style>

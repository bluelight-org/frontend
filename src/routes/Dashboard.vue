<template>
  <navbar active="dashboard"></navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import { DefaultProps } from "vue/types/options";
import { DashboardData, DashboardMethods } from "typings/routes/Dashboard";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend<DashboardData, DashboardMethods, DefaultProps>({
  components: { Navbar },
  name: "Dashboard",
  data() {
    const colorScheme = getColorScheme();

    return {
      navbarColor: colorScheme.navbarColor
    };
  },
  methods: {}
});
</script>

<style scoped></style>

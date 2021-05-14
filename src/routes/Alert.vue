<template>
  <navbar active="alert"></navbar>
</template>

<script>
import Vue from "vue";
import Navbar from "@/components/Navbar";

export default Vue.extend({
  name: "Alert",
  components: { Navbar }
});
</script>

<style scoped></style>

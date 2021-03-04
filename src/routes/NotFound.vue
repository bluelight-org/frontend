<template>
  <p class="not-found-text">404 page not found</p>
</template>

<script lang="ts">
export default {
  name: "NotFound"
};
</script>

<style scoped>
.not-found-text {
  font-family: "Montserrat", serif;
  font-size: 6em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

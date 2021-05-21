<template>
  <div>
    <navbar active="alert"></navbar>
    <div class="container">
      <label>
        Einsatzstichwort:
        <input
          type="text"
          class="form-control"
          id="commitment-keyword"
          placeholder="RD 1 - Stichverletzung"
        />
      </label>
      <div class="row">
        <div class="col-md-6">
          <label>
            Adresse:
            <input
              type="text"
              class="form-control"
              placeholder="Poststraße 7"
            />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Ort:
            <input type="text" class="form-control" placeholder="25746 Heide" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "@/components/Navbar";

export default Vue.extend({
  name: "Alert",
  components: { Navbar }
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
#commitment-keyword {
  width: 80vw !important;
}
input[type="text"] {
  width: 200%;
}
</style>

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
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import { getColorScheme } from "@/services/StorageService";
import { DefaultProps } from "vue/types/options";
import { AlertData, AlertMethods } from "typings/routes/Alert";
import { Vehicle } from "typings/api/models/vehicle";
import { RestService } from "@/services/RestService";
import { GetAllVehicles } from "typings/api/responses/getAllVehicles";

export default Vue.extend<AlertData, AlertMethods, DefaultProps>({
  name: "Alert",
  components: { Navbar },
  data() {
    const colorScheme = getColorScheme();
    const service = new RestService();
    return {
      navbarColor: colorScheme.navbarColor,
      APISerice: service
    };
  },
  methods: {
    async getAvailibleVehicles(): Promise<Vehicle[]> {
      return ((await this.APISerice.getAllVehicles(1)) as GetAllVehicles).data;
    }
  }
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

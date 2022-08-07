<template>
  <div>
    <navbar active="alert"></navbar>
    <div class="container">
      <label>
        {{ $t("alert.missionKeyword") }}:
        <input
          type="text"
          class="form-control"
          id="commitment-keyword"
          :placeholder="`RD 1 - ${$t('alert.stabWound')}`"
        />
      </label>
      <div class="row">
        <div class="col-md-6">
          <label>
            {{ $t("common.address") }}:
            <input
              type="text"
              class="form-control"
              placeholder="Poststraße 7"
            />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            {{ $t("common.city") }}:
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
import { DefaultProps } from "vue/types/options";
import { AlertData, AlertMethods } from "typings/routes/Alert";
import { Vehicle } from "typings/api/models/vehicle";
import { RestService } from "@/services/RestService";
import { GetAllVehicles } from "typings/api/responses/getAllVehicles";

export default Vue.extend<AlertData, AlertMethods, DefaultProps>({
  name: "Alert",
  components: { Navbar },
  data() {
    const service = new RestService();
    return {
      APISerice: service
    };
  },
  methods: {
    async getAvailibleVehicles(): Promise<Vehicle[]> {
      return ((await this.APISerice.getAllVehiclesOfStation(
        1
      )) as GetAllVehicles).data;
    }
  }
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
input[type="text"] {
  width: 200%;
}
</style>

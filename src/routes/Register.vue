<template>
  <div class="container">
    <div class="card align-content-center" :style="{ background: cardColor }">
      <div class="card-body" :style="{ background: cardColor }">
        <h1 class="card-title">Register</h1>
        <input
          class="form-control"
          :style="{
            background: inputColor,
            borderColor: inputBorderColor,
            color: textColor
          }"
          placeholder="Username"
          type="text"
          v-model="usernameValue"
        />
        <input
          class="form-control"
          :style="{
            background: inputColor,
            borderColor: inputBorderColor,
            color: textColor
          }"
          placeholder="password"
          type="password"
          v-model="passwordValue"
        />
        <input
          class="form-control"
          :style="{
            background: inputColor,
            borderColor: inputBorderColor,
            color: textColor
          }"
          placeholder="retype password"
          type="password"
          v-model="passwordRetypeValue"
        />
        <div class="d-flex flex-column">
          <button
            class="btn btn-primary"
            :style="{
              backgroundColor: buttonColor,
              borderColor: buttonColor
            }"
            v-on:click="
              register(usernameValue, passwordValue, passwordRetypeValue)
            "
          >
            register
          </button>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import { RestService } from "@/services/RestService";
import { RegisterData, RegisterMethods } from "typings/routes/Register";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<RegisterData, RegisterMethods, DefaultProps>({
  name: "Register",

  data() {
    const colorScheme = getColorScheme();
    return {
      // colors
      cardColor: colorScheme.cardColor,
      inputColor: colorScheme.inputColor,
      inputBorderColor: colorScheme.inputBorderColor,
      buttonColor: colorScheme.buttonColor,
      textColor: colorScheme.textColor,

      // input values
      usernameValue: "",
      passwordValue: "",
      passwordRetypeValue: ""
    };
  },

  methods: {
    // on click login function
    register(username: string, password: string, retypePassword: string): void {
      new RestService()
        .register(username, password, retypePassword)
        .then(data => {
          if (!data[0]) {
            this.$notify({
              group: "notification",
              title: "registration failed",
              text: data[1],
              type: "error",
              duration: 1000
            });
          } else {
            this.$notify({
              group: "notification",
              title: "registration was successful",
              text: data[1],
              type: "success",
              duration: 1000
            });
          }
        });
    }
  }
});
</script>

<style scoped>
.card {
  margin-top: 15%;
}
.card-title {
  text-align: center;
}
.form-control {
  height: 55px;
}
input {
  margin-top: 1em;
  font-size: 1.2em;
}
input::placeholder {
  text-align: center;
}
.btn {
  margin-top: 1em;
  padding: 13px;
  margin-left: 30%;
  margin-right: 30%;
}

a {
  display: grid;
  place-items: center;
  margin-top: 10px;
}
</style>

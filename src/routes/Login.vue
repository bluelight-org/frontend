<template>
  <div class="container">
    <div class="card align-content-center" :style="{ background: cardColor }">
      <div class="card-body" :style="{ background: cardColor }">
        <h1 class="card-title">Login</h1>
        <input
          class="form-control"
          :style="{
            background: inputColor,
            borderColor: inputColor,
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
            borderColor: inputColor,
            color: textColor
          }"
          placeholder="Password"
          type="password"
          v-model="passwordValue"
        />
        <div class="d-flex flex-column">
          <button
            class="btn btn-primary"
            :style="{
              backgroundColor: buttonColor,
              borderColor: buttonColor
            }"
            :click="login(usernameValue, passwordValue)"
          >
            Anmelden
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CookieService } from "@/services/CookieService";
import { RestService } from "@/services/RestService";
import { LoginData, LoginMethods } from "typings/routes/Login";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<LoginData, LoginMethods, DefaultProps>({
  name: "Login",

  data() {
    const colorScheme = new CookieService().getColorScheme();
    return {
      // colors
      cardColor: colorScheme.cardColor,
      inputColor: colorScheme.inputColor,
      buttonColor: colorScheme.buttonColor,
      textColor: colorScheme.textColor,

      // input values
      usernameValue: "",
      passwordValue: ""
    };
  },

  methods: {
    // on click login function
    login(username, password) {
      const status = new RestService().login(username, password);
      console.log(status);
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
</style>

<template>
  <div class="container">
    <div class="card align-content-center" v-bind:style="{background: cardColor}">
      <div class="card-body" v-bind:style="{background: cardColor}">
        <h1 class="card-title">Login</h1>
          <input class="form-control" v-bind:style="{background: inputColor, borderColor: inputColor, color: textColor}" placeholder="Username" type="text" v-model="usernameValue">
          <input class="form-control" v-bind:style="{background: inputColor, borderColor: inputColor, color: textColor}" placeholder="Password" type="password" v-model="passwordValue">
          <div class="d-flex flex-column">
            <button class="btn btn-primary" v-bind:style="{backgroundColor: buttonColor, borderColor: buttonColor}" v-on:click="login(usernameValue, passwordValue)">Anmelden</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {CookieService} from "@/services/CookieService";
import {RestService} from "@/services/RestService";

export default {
  name: "Login",

  data() {
    let colorScheme = new CookieService().getColorScheme();
    return {
      // colors
      cardColor: colorScheme.cardColor,
      inputColor: colorScheme.inputColor,
      buttonColor: colorScheme.buttonColor,
      textColor: colorScheme.textColor,

      // input values
      usernameValue: "",
      passwordValue: ""
    }
  },

  methods: {
    login(username: string, password: string): void {
        let status = new RestService().login(username, password);
        console.log(status);
    }
  }
}
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

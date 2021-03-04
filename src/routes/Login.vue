<template>
  <div class="container">
    <div class="card align-content-center" v-bind:style="{background: cardColor}">
      <div class="card-body" v-bind:style="{background: cardColor}">
        <h1 class="card-title">Login</h1>
          <input class="form-control" v-bind:style="{background: inputColor, borderColor: inputColor}" placeholder="Username" type="text">
          <input class="form-control" v-bind:style="{background: inputColor, borderColor: inputColor}" placeholder="Password" type="password">
          <div class="d-flex flex-column">
            <button class="btn btn-primary">Anmelden</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {CookieService} from "@/services/CookieService";

export default {
  name: "Login",

  data() {
    let colorScheme = new CookieService().getColorScheme();
    return {
      cardColor: colorScheme.cardColor,
      inputColor: colorScheme.inputColor
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
    margin-left: 20em;
    margin-right: 20em;
  }
</style>

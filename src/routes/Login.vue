<template>
  <div class="container">
    <div class="card align-content-center" :style="{ background: cardColor }">
      <div class="card-body" :style="{ background: cardColor }">
        <h1 class="card-title">{{ $t("routes.login") }}</h1>
        <input
          class="form-control"
          :style="{
            background: inputColor,
            borderColor: inputBorderColor,
            color: textColor
          }"
          v-bind:placeholder="$t('common.username')"
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
          v-bind:placeholder="$t('common.password')"
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
            v-on:click="login(usernameValue, passwordValue)"
          >
            {{ $t("routes.login") }}
          </button>
          <a href="/register">{{ $t("routes.register") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getColorScheme } from "@/services/StorageService";
import { RestService } from "@/services/RestService";
import { LoginData, LoginMethods } from "typings/routes/Login";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<LoginData, LoginMethods, DefaultProps>({
  name: "Login",

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
      passwordValue: ""
    };
  },

  methods: {
    // on click login function
    login(username, password): void {
      new RestService().login(username, password).then(data => {
        if (!data) {
          this.$notify({
            group: "notification",
            title: "login failed",
            text: "wrong login credentials",
            type: "error",
            duration: 1000
          });
        } else {
          if (this.$route.params.nextUrl)
            this.$router.push(this.$route.params.nextUrl);
          else this.$router.push("/dashboard");
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

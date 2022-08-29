<template>
  <div class="container">
    <form v-on:submit="onSettingsSave">
      <div class="form-group">
        <label>{{ $t("settings.language.chooseLanguage") }}:</label>
        <select class="form-control" v-model="currentLocale">
          <option v-for="lang in languageOptions" :key="lang" :value="lang.id">
            {{ lang.name }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">
        {{ $t("common.save") }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  LanguageSettingsData,
  LanguageSettingsMethods
} from "../../../typings/components/settings/LanguageSettings";
import { DefaultComputed } from "vue/types/options";
import TranslationHandler from "@/services/TranslationHandler";
import getConfiguration from "@/services/ConfigurationHandler";
export default Vue.extend<
  LanguageSettingsData,
  LanguageSettingsMethods,
  DefaultComputed
>({
  name: "LanguageSettings",
  data() {
    return {
      languageOptions: [
        {
          id: "de",
          name: "Deutsch"
        },
        {
          id: "en",
          name: "English (US)"
        }
      ],
      currentLocale:
        TranslationHandler.getCurrentLocale() ??
        getConfiguration().defaultLanguage
    };
  },
  methods: {
    onSettingsSave: function(e: Event) {
      e.preventDefault();
      TranslationHandler.setLocale(this.currentLocale);
      window.location.reload();
    }
  }
});
</script>

<style scoped>
.btn-primary {
  background: var(--dropdownElementColor);
  border-color: var(--dropdownElementColor);
}
</style>

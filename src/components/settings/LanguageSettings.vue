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
import { LanguageDefinition } from "../../../typings/components/settings/LanguageSettings";
import TranslationHandler from "@/services/TranslationHandler";
import getConfiguration from "@/services/ConfigurationHandler";

const currentLocale: string =
  TranslationHandler.getCurrentLocale() ?? getConfiguration().defaultLanguage;

const languageOptions: LanguageDefinition[] = [
  {
    id: "de",
    name: "Deutsch",
  },
  {
    id: "en",
    name: "English (US)",
  },
];

function onSettingsSave(e: Event) {
  e.preventDefault();
  TranslationHandler.setLocale(currentLocale);
  window.location.reload();
}
</script>

<style scoped>
.btn-primary {
  background: var(--dropdownElementColor);
  border-color: var(--dropdownElementColor);
}
</style>

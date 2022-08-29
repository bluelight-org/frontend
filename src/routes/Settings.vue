<template>
  <div>
    <navbar active=""></navbar>
    <div class="container parentContainer">
      <h1>{{ $t("routes.settings") }}</h1>
      <ListGroupContentWrapper
        :items="listItems"
        :location-search-enabled="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { SettingsData, SettingsMethods } from "typings/routes/Settings";
import { DefaultProps } from "vue/types/options";
import Navbar from "@/components/Navbar.vue";
import ListGroupContentWrapper from "@/components/ListGroupContentWrapper.vue";
import LanguageSettings from "@/components/settings/LanguageSettings.vue";
import ProfileSettings from "@/components/settings/ProfileSettings.vue";
export default Vue.extend<SettingsData, SettingsMethods, DefaultProps>({
  name: "Settings",
  components: { ListGroupContentWrapper, Navbar },
  data() {
    return {
      listItems: [
        {
          id: this.$t("settings.profileSettings") as string,
          component: ProfileSettings,
          searchId: "profile"
        },
        {
          id: this.$t("settings.languageSettings") as string,
          component: LanguageSettings,
          searchId: "language"
        }
      ]
    };
  },

  methods: {}
});
</script>

<style scoped>
h1 {
  color: var(--textColor);
}
.container {
  margin-top: 1em;
}
.container.parentContainer {
  margin-top: 5em;
}
</style>

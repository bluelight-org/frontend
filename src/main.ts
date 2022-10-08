import { createApp } from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap-vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import Notifications from "vue-notification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { initIcons } from "@/font-awsome";
import TranslationHandler from "@/services/TranslationHandler";

initIcons();

createApp(App)
  .use(Bootstrap)
  .use(Router)
  .use(VueResource)
  .use(Notifications)
  .use(TranslationHandler.getTranslationConfiguration())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap-vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import Notifications from "vue-notification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { initIcons } from "@/font-awsome";
import VueI18n from "vue-i18n";
import getTranslationConfiguration from "@/services/TranslationHandler";

Vue.use(Bootstrap);
Vue.use(Router);
Vue.use(VueResource);
Vue.use(Notifications);
Vue.use(VueI18n);

Vue.component("font-awesome-icon", FontAwesomeIcon);

initIcons();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  i18n: getTranslationConfiguration()
}).$mount("#app");

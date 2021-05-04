import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap-vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import Notifications from "vue-notification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { initIcons } from "@/font-awsome";

Vue.use(Bootstrap);
Vue.use(Router);
Vue.use(VueResource);
Vue.use(Notifications);

Vue.component("font-awesome-icon", FontAwesomeIcon);

initIcons();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

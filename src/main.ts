import Vue from "vue";
import App from "./App.vue";
import Bootstrap from "bootstrap-vue";
import Router from "vue-router";
import VueResource from "vue-resource";
import Notifications from "vue-notification";

Vue.use(Bootstrap);
Vue.use(Router);
Vue.use(VueResource);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => h(App)
}).$mount("#app");

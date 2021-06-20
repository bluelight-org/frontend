import Router from "vue-router";

// These imports are all routes
// registered for the router
import Login from "./routes/Login.vue";
import Register from "./routes/Register.vue";
import NotFound from "./routes/NotFound.vue";
import Dashboard from "./routes/Dashboard.vue";
import Alert from "./routes/Alert.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/alert",
      name: "Alert",
      component: Alert
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

import Router from "vue-router";

// These imports are all routes
// registered for the router
import Login from "./routes/Login.vue";
import Register from "./routes/Register.vue";
import NotFound from "./routes/NotFound.vue";
import Dashboard from "./routes/Dashboard.vue";

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
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

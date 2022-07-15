import Router from "vue-router";

// These imports are all routes
// registered for the router
import Login from "./routes/Login.vue";
import Register from "./routes/Register.vue";
import NotFound from "./routes/NotFound.vue";
import Dashboard from "./routes/Dashboard.vue";
import Alert from "./routes/Alert.vue";

const router = new Router({
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
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/alert",
      name: "Alert",
      component: Alert,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("accessToken")) {
      next();
    } else {
      next({
        params: { nextUrl: to.fullPath },
        name: "Login"
      });
    }
  } else {
    next();
  }
});

export default router;

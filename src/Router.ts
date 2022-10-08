import {
  createRouter,
  NavigationGuardNext,
  RouteLocationNormalized,
  createWebHistory,
} from "vue-router";

// These imports are all routes
// registered for the router
import Login from "./routes/Login.vue";
import Register from "./routes/Register.vue";
import NotFound from "./routes/NotFound.vue";
import Dashboard from "./routes/Dashboard.vue";
import Alert from "./routes/Alert.vue";
import Settings from "./routes/Settings.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/alert",
    name: "Alert",
    component: Alert,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  mode: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (to.matched.some((record: any) => record.meta.requiresAuth)) {
      if (localStorage.getItem("accessToken")) {
        next();
      } else {
        next({
          params: { nextUrl: to.fullPath },
          name: "Login",
        });
      }
    } else {
      next();
    }
  }
);

export default router;

import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../pages/Home/index.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;

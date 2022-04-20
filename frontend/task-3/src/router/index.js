import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NoFoundView from "../views/NoFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/:notFound(.*)", redirect: "/error404" },
  { path: "/error404", component: NoFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import RegForm from "@/views/RegForm.vue";
import LoginForm from "@/views/LoginForm.vue";
import ArgumentalReality from "@/views/ArgumentalReality.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/registration",
    name: "reg",
    component: RegForm,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/interesting",
    name: "ar",
    component: ArgumentalReality,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

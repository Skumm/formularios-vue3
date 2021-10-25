import { createRouter, createWebHistory } from "vue-router";
import BasicForm from "@/views/BasicForm";
import LoginForm from "@/views/LoginForm";

const routes = [
  {
    path: "/",
    name: "Home",
    component: BasicForm,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

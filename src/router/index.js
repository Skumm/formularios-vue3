import { createRouter, createWebHistory } from "vue-router";
import BasicForm from "@/views/BasicForm";

const routes = [
  {
    path: "/",
    name: "Home",
    component: BasicForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

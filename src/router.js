import { BALANCE_URL, QUESTIONS_URL } from "@/constants/constants";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: QUESTIONS_URL,
    name: "질문하기",
    component: () => import("@/views/Questions.vue"),
  },
  {
    path: BALANCE_URL,
    name: "사람 알아맞추기",
    component: () => import("@/views/BalanceGame.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "404", redirect: QUESTIONS_URL },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

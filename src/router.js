import { FIND_PERSON_URL, QUESTIONS_URL } from "@/constants/constants";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: FIND_PERSON_URL,
    name: "사람 알아맞추기",
    component: () => import("@/views/Questions.vue"),
  },
  {
    path: QUESTIONS_URL,
    name: "질문하기",
    component: () => import("@/views/GameCard.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "404", redirect: QUESTIONS_URL },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

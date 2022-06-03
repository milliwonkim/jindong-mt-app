<template>
  <nav class="link-box">
    <router-link
      class="router"
      v-for="game in games"
      v-bind:key="game.id"
      :to="game.path"
      >{{ game.name }}</router-link
    >
  </nav>
  <router-view />
</template>
<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const games = ref([
      { name: "상대방 맞춰보기", path: "/find-person", id: "1" },
      { name: "질문하기", path: "/questions", id: "2" },
    ]);
    return { games };
  },
};
</script>
<style lang="scss">
@import url("~reset-css/reset.css");
a {
  text-decoration: none;
  color: #424242;
}

.router {
  margin: 16px 0;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.link-box {
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>

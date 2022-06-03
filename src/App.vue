<template>
  <nav class="link-box">
    <router-link
      class="router"
      v-for="game in games"
      v-bind:key="game.id"
      :to="game.path"
    >
      <game-card>
        {{ game.name }}
      </game-card>
    </router-link>
  </nav>
  <router-view />
</template>
<script>
import { ref } from "vue";
import GameCard from "@/components/GameCard.vue";
export default {
  components: { GameCard },
  name: "App",
  setup() {
    const games = ref([
      { name: "상대방 맞춰보기 게임", path: "/questions", id: "1" },
      { name: "밸런스 게임", path: "/balance", id: "2" },
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

.link-box {
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
}

.router {
  margin: 16px 0;
  border-radius: 8px;
  padding: 16px;
}
</style>

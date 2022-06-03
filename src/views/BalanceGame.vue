<template>
  <div>
    <p class="level-title">난이도</p>
    <div>
      <game-card
        @click="handleLevel(level)"
        v-bind:key="level"
        v-for="level in levelList"
        >{{ level }}</game-card
      >
    </div>
    <nav class="nav-button-box">
      <game-card @click="handleRoute(PREV_NAV)">이전</game-card>
      <game-card @click="handleRoute(NEXT_NAV)">다음</game-card>
    </nav>
    <info-box>
      <game-card v-bind:key="el.id" v-for="el in list">{{
        el.question
      }}</game-card>
    </info-box>
  </div>
</template>
<script>
import { BALANCE_LIST, PREV_NAV, NEXT_NAV } from "@/constants/constants";
import { onMounted, onUpdated, ref } from "vue";
import GameCard from "@/components/GameCard.vue";
import InfoBox from "@/components/InfoBox.vue";

export default {
  components: { GameCard, InfoBox },
  name: "balance-game",
  setup() {
    const list = ref([]);
    const levelList = ref([]);
    const elId = ref(1);

    const handleLevel = (num) => {
      list.value = BALANCE_LIST.filter(
        (el) => el.level === num && el.id === elId.value
      );
    };

    const handleRoute = (prevOrNext) => {
      if (prevOrNext === PREV_NAV) {
        list.value = BALANCE_LIST.filter((el) => {
          if (el.id > 1) {
            return el.id === elId.value - 1;
          }
        });
        elId.value = elId.value - 1;
      } else {
        list.value = BALANCE_LIST.filter((el) => {
          if (el.id > 1) {
            return el.id === elId.value + 1;
          }
        });
        elId.value = elId.value + 1;
      }
    };

    onMounted(() => {
      const temp = BALANCE_LIST.map((el) => el.level);
      levelList.value = [...new Set(temp)];
    });

    onUpdated(() => {
      console.log(elId.value);
    });

    console.log(levelList);

    return {
      list,
      levelList,
      handleLevel,
      handleRoute,
      PREV_NAV,
      NEXT_NAV,
    };
  },
};
</script>
<style lang="scss">
.level-title {
  text-align: center;
}
.nav-button-box {
  display: flex;
  flex-direction: row;
}
</style>

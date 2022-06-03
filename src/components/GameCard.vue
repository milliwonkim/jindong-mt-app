<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
import { onErrorCaptured } from "vue";
export default {
  name: "game-card",
  setup() {
    onErrorCaptured(() => {
      console.log("error");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin: 0 auto;
  padding: 16px;
  cursor: pointer;
}
</style>

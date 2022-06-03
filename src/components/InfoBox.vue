<template lang="">
  <div class="info-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "info-box",
};
</script>
<style lang="scss">
.info-box {
  margin-top: 16px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  font-size: 30px;
  font-weight: 700;
  min-height: 60vh;
  margin: 0 auto;
  width: 80vw;
}
</style>

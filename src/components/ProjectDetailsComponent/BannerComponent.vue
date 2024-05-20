<template>
  <div class="banner">
    <img src="/images/BannerPD.svg" alt="photo" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  margin-top: 45px;
}
</style>

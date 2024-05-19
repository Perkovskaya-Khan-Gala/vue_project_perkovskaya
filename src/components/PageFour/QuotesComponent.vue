<template>
  <div class="quotes center">
    <div class="quotes_box">
      <div class="quotes_left">
        <div class="quotes_title">Block Quotes</div>
      </div>
      <div class="quotes_right">
        <img src="/images/QuotesBlock.svg" alt="quotes" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuotesComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.quotes {
  margin-top: 100px;
  position: relative;
  margin-bottom: 790px;
}
.quotes_box {
  padding-top: 155px;
  padding-bottom: 155px;
  display: flex;
  gap: 100px;
}
.quotes_left {
  width: 300px;
}
.quotes_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}
</style>

<template>
  <div class="info">
    <div class="info_box center">
      <div class="info_content">
        <div class="info_number">12</div>
        <div class="info_text">Years Of Experiance</div>
      </div>
      <div class="info_border"></div>
      <div class="info_content">
        <div class="info_number">85</div>
        <div class="info_text">Success Project</div>
      </div>
      <div class="info_border"></div>
      <div class="info_content">
        <div class="info_number">15</div>
        <div class="info_text">Active Project</div>
      </div>
      <div class="info_border"></div>
      <div class="info_content">
        <div class="info_number">95</div>
        <div class="info_text">Happy CUstomers</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.info {
  background-color: #f4f0ec;
  height: 457px;
  display: flex;
  align-items: center;
  margin-top: 96px;
  position: relative;
  z-index: 20;
}

.info_box {
  display: flex;
}

.info_number {
  font-family: DM Serif Display;
  font-size: 85px;
  font-weight: 400;
  line-height: 106.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #cda274;
}

.info_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.info_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.info_border {
  border-left: solid 1px #cda274;
  height: 130px;
}
</style>

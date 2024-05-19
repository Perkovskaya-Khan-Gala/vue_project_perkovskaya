<template>
  <div class="color center">
    <div class="color_box">
      <div class="color_left">
        <div class="color_title">Color</div>
        <div class="color_text">
          Primaries, shades and text and any other color style used in Intrno.
        </div>
      </div>
      <div class="color_right">
        <div class="color_primary">
          <img src="/images/Backgorund1.svg" alt="primary1" />
          <p class="color_set">Primaty 1</p>
          <p class="color_color">#CDA274</p>
        </div>

        <div class="color_primary">
          <img src="/images/Backgorund2.svg" alt="primary2" />
          <p class="color_set">Primaty 2</p>
          <p class="color_color">#292F36</p>
        </div>

        <div class="color_primary">
          <img src="/images/Backgorund3.svg" alt="primary3" />
          <p class="color_set">Primaty 3</p>
          <p class="color_color">#F4F0EC</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorComponent",
  props: {},
};
</script>

<style scoped>
.color {
  margin-top: 200px;
  position: relative;
}
.color_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  padding-top: 94px;
  padding-bottom: 94px;
  border-radius: 70px;
}
.color_left {
  width: 310px;
  margin-left: 64px;
}
.color_right {
  margin-right: 64px;
  display: flex;
  gap: 35px;
}
.color_primary {
}
.color_set {
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #292f36;
}
.color_color {
  font-family: Jost;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #292f36;
}
.color_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}
.color_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}
</style>

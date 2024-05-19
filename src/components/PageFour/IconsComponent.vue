<template>
  <div class="icons center">
    <div class="icons_box">
      <div class="icons_left">
        <div class="icons_title">Icons</div>
        <div class="icons_text">Little pictures that help out in various ways.</div>
      </div>
      <div class="icons_right">
        <div class="icons_container">
          <div class="icons_container_text">Interface</div>
          <div class="icons_sign_one">
            <img src="/images/Interface1.svg" alt="call" />
            <img src="/images/Interface2.svg" alt="кавычки" />
            <img src="/images/Interface3.svg" alt="arrow" />
            <img src="/images/Interface4.svg" alt="star" />
          </div>
        </div>
        <div class="icons_container">
          <div class="icons_container_text">Social Media</div>
          <div class="icons_sign_two">
            <img src="/images/SocialM1.svg" alt="facebook" />
            <img src="/images/SocialM2.svg" alt="twitter" />
            <img src="/images/SocialM3.svg" alt="in" />
            <img src="/images/SocialM4.svg" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconsComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.icons {
  margin-top: 100px;
  position: relative;
}
.icons_box {
  background-color: #f6f6f6;
  padding-top: 155px;
  padding-bottom: 155px;
  border-radius: 70px;
  display: flex;
  gap: 132px;
}
.icons_left {
  width: 317px;
  padding-left: 55px;
}
.icons_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}
.icons_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}
.icons_container {
  margin-bottom: 60px;
}
.icons_container_text {
  font-family: DM Serif Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #292f36;
}
.icons_sign_one {
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(2, 70px);
  align-items: start;
  gap: 14px;
}
.icons_sign_two {
  margin-top: 16px;
  display: flex;
  gap: 54px;
}
</style>

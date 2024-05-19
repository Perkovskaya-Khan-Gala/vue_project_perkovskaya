<template>
  <div class="box center">
    <img src="/images/Image.svg" alt="" />
    <div class="box_content center">
      <h1 class="box_title">Let Your Home Be Unique</h1>
      <p class="box_text">
        There are many variations of the passages of lorem Ipsum fromavailable, majority.
      </p>
      <button class="box_button">
        Get Started <img src="/images/Vector.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainArticleComponent",
  props: {},
};
</script>

<style scoped>
.box {
  position: relative;
}

.box_content {
  width: 434px;
  position: absolute;
  left: 52px;
  top: 208px;
}

.box_title {
  font-family: DM Serif Display;
  font-size: 65px;
  font-weight: 400;
  line-height: 81.25px;
  text-align: left;
  color: #292f36;
}

.box_text {
  margin-top: 18px;

  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.box_button {
  margin-top: 21px;
  background-color: #292f36;
  color: white;

  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  line-height: 22.5px;
  letter-spacing: 0.02em;
  text-align: center;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 26px 49px 26px 48px;
  border-radius: 20px;
  cursor: pointer;
}
</style>

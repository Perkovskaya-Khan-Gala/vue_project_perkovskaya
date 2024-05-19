<template>
  <div class="buttons center">
    <div class="buttons_box">
      <div class="buttons_left">
        <div class="buttons_title">Buttons</div>
        <div class="buttons_text">Component, text style and size variations</div>
      </div>
      <div class="buttons_right">
        <div class="buttons_container">
          <div class="buttons_container_text">Default</div>
          <button class="buttons_button">
            Defailt Button
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="buttons_container">
          <div class="buttons_container_text">Large</div>
          <button class="buttons_button">
            Large Button Style
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="buttons_container">
          <div class="buttons_container_text">Color</div>
          <button class="buttons_button_color">
            Primary 01
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonsComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.buttons {
  margin-top: 100px;
  position: relative;
}
.buttons_box {
  background-color: #f6f6f6;
  padding-top: 155px;
  padding-bottom: 155px;
  border-radius: 70px;
  display: flex;

  gap: 146px;
}
.buttons_left {
  width: 317px;
  margin-left: 55px;
}
.buttons_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}
.buttons_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;

  color: #4d5053;
}
.buttons_right {
  display: grid;
  grid-template-columns: 250px 290px;
  gap: 30px;
}
.buttons_container {
  margin-bottom: 16px;
}
.buttons_container_text {
  font-family: DM Serif Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #292f36;
}
.buttons_button {
  margin-top: 21px;
  background-color: #292f36;
  border: #292f36;
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

  padding: 26px 53px 26px 53px;
  border-radius: 20px;
  cursor: pointer;
}
.buttons_button_color {
  margin-top: 21px;
  background-color: #cda274;
  border: #cda274;
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

  padding: 26px 53px 26px 53px;
  border-radius: 20px;
  cursor: pointer;
}
</style>

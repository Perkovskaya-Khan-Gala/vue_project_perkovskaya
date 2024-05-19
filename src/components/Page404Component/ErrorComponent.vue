<template>
  <div class="error">
    <div class="error_box">
      <div class="error_left">
        <h1 class="error_number">404</h1>
        <h3 class="error_text">We are sorry, but the page you requested was not found</h3>
        <button class="error_button">
          Back To Home
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="error_right">
        <img src="/images/ErrorImages.svg" alt="error_image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.error {
  position: relative;
  padding-left: calc(50% - 600px);
}
.error_box {
  display: flex;
  align-items: center;
  gap: 81px;
}
.error_left {
  width: 569px;
}
.error_number {
  font-family: DM Serif Display;
  font-size: 250px;
  font-weight: 400;
  line-height: 312.5px;
  text-align: left;
  color: #cda274;
}
.error_text {
  font-family: DM Serif Display;
  font-size: 35px;
  font-weight: 400;
  line-height: 52.5px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #292f36;

  width: 570px;
}

.error_button {
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
</style>

<template>
  <div class="articles center">
    <router-link to="blog">
      <h1 class="articles_title">Articles & News</h1>
    </router-link>
    <p class="articles_text">
      It is a long established fact that a reader will be distracted by the of readable
      content of a page when lookings at its layouts the points of using.
    </p>
    <div class="articles_box">
      <div class="articles_item">
        <img src="/images/ImageA1.svg" alt="" class="articles_img" />
        <div class="articles_addinfo">Kitchen Design</div>
        <div class="articles_info">Let’s Get Solution For Building Construction Work</div>
        <div class="articles_data">
          <div class="articles_year">26 December,2022</div>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="articles_item">
        <img src="/images/ImageA2.svg" alt="" class="articles_img" />
        <div class="articles_addinfo">Living Design</div>

        <div class="articles_info">
          Low Cost Latest Invented Interior Designing <br />Ideas.
        </div>
        <div class="articles_data">
          <div class="articles_year">22 December,2022</div>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="articles_item">
        <img src="/images/ImageA3.svg" alt="" class="articles_img" />
        <div class="articles_addinfo">Interior Design</div>

        <div class="articles_info">
          Best For Any Office & Business Interior <br />
          Solution
        </div>
        <div class="articles_data">
          <div class="articles_year">25 December,2022</div>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesNewsMiniComponent",
  props: {},
};
</script>

<style scoped>
.articles {
  margin-top: 96px;
}

.articles_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292f36;
}

.articles_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #4d5053;
  width: 811px;
  margin: auto;
  margin-top: 12px;
}

.articles_box {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(3, 382px);
  gap: 27px;
}

.articles_item {
  border: solid 1px #e7e7e7;
  padding: 21px;
  border-radius: 65px;
  padding-bottom: 38px;
  position: relative;
}

.articles_item:hover {
  background-color: #f4f0ec;
}

.articles_item:hover svg circle {
  fill: white;
}

.articles_info {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;

  width: 305px;
  margin-top: 21px;
}

.articles_data {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.articles_year {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.articles svg {
  cursor: pointer;
}

.articles_addinfo {
  position: absolute;
  left: 41px;
  top: 249px;
  padding: 4px 5px 8px 11px;
  border-radius: 5px 5px 5px 0px;
  background-color: #ffffff;

  z-index: 20;

  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}
</style>

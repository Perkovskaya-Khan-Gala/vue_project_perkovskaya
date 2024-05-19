<template>
  <div class="post center">
    <h1 class="post_title">Latest Post</h1>
    <div class="post_box">
      <img class="post_img" src="/images/ImagePost.svg" alt="" />
      <div class="post_info">
        <h3 class="post_header">Low Cost Latest Invented Interior Designing Ideas</h3>
        <p class="post_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
          maximus.posuere in.Contrary to popular belief.
        </p>
        <p class="post_text">
          Lorem Ipsum is not simply random text. It has roots in a piece of classica.
        </p>
        <div class="post_nav">
          <div class="post_data">26 December,2022</div>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
            <path
              d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
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
  name: "PostComponent",
  props: {},
};
</script>

<style scoped>
.post {
  margin-top: 200px;
}

.post_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}

.post_box {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 55px;
  margin-top: 27px;
  position: relative;
  gap: 65px;
}

.post_img {
  position: relative;
  z-index: 20;
}

.post_info {
  width: 489px;
}

.post_header {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}

.post_text {
  padding-top: 22px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.post_nav {
  margin-top: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post_data {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.post svg:hover {
  cursor: pointer;
}
</style>

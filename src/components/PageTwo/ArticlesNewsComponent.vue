<template>
  <div class="articles center">
    <router-link to="blog"> <h1 class="articles_title">Articles & News</h1></router-link>
    <div class="articles_box">
      <div class="articles_item" v-for="item in articles" :key="item.id">
        <img :src="item.image" alt="image" class="articles_img" />
        <div class="articles_addinfo">{{ item.addInfo }}</div>
        <div class="articles_info">{{ item.info }}</div>
        <div class="articles_data">
          <div class="articles_year">{{ item.dateInfo }}</div>
          <router-link to="blogdetails">
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
              /></svg
          ></router-link>
        </div>
      </div>
    </div>
    <div class="pagination center">
      <button class="pagination_button">01</button>
      <router-link to="404"><button class="pagination_button">02</button></router-link>
      <router-link to="404"><button class="pagination_button">03</button></router-link>
      <router-link to="404">
        <button class="pagination_button">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesNewsComponent",
  props: {},
  data() {
    return {
      articles: [
        {
          image: "/images/ImageA1.svg",
          addInfo: "Kitchen Design",
          info: "Let’s Get Solution For Building Construction Work",
          dateInfo: "22 December,2022",
        },
        {
          image: "/images/ImageA2.svg",
          addInfo: "Living Design",
          info: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          dateInfo: "22 December,2022",
        },
        {
          image: "/images/ImageA3.svg",
          addInfo: "Interior Design",
          info: "Best For Any Office & Business Interior <br> Solution",
          dateInfo: "22 December,2022",
        },
        {
          image: "/images/ImageA4.svg",
          addInfo: "Kitchen Design",
          info: "Let’s Get Solution For Building Construction Work",
          dateInfo: "22 December,2022",
        },
        {
          image: "/images/ImageA5.svg",
          addInfo: "Living Design",
          info: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          dateInfo: "22 December,2022",
        },
        {
          image: "/images/ImageA6.svg",
          addInfo: "Interior Design",
          info: "Best For Any Office & Business Interior <br> Solution",
          dateInfo: "22 December,2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
.articles {
  margin-top: 150px;
}

.articles_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}

.articles_box {
  margin-top: 30px;
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

.pagination {
  align-items: center;
  margin: auto;
  width: 268px;
  margin-top: 51px;
  display: flex;
  gap: 20px;
}

.pagination_button {
  background-color: #fff;
  width: 53px;
  height: 53px;
  border: solid 1px #cda274;
  border-radius: 50%;
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #292f36;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination_button:hover {
  background-color: #f4f0ec;
  border: solid 1px #f4f0ec;
}
</style>

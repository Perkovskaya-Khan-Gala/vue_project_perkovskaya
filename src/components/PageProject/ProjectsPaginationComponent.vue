<template>
  <div class="projects center">
    <div class="projects_filter">
      <button class="projects_button" @click="name = 'Bathroom'">Bathroom</button>
      <button class="projects_button" @click="name = 'Bedroom'">Bedroom</button>
      <button class="projects_button" @click="name = 'Kitchen'">Kitchen</button>
      <button class="projects_button" @click="name = 'LivingArea'">LivingArea</button>
    </div>
    <div class="projects_box">
      <div class="projects_item" v-for="item in filtered" :key="item.id">
        <img
          :src="item.image"
          alt="image"
          class="projects_img"
          @click="item.like = !item.like"
        />
        <img
          v-if="item.like"
          src="/images/Star3.svg"
          alt="star"
          class="projects_star"
          @click="item.like = !item.like"
        />
        <div class="projects_nav">
          <div class="projects_info">
            <div class="projects_title">{{ item.addInfo }}</div>
            <div class="projects_path">{{ item.path }}</div>
          </div>
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
    <div class="pagination center">
      <button class="pagination_button">01</button>
      <button class="pagination_button">02</button>
      <button class="pagination_button">03</button>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPerkovskayaProjectsPaginationComponent",

  data() {
    return {
      name: "",
      projects: [
        {
          image: "/images/ImageP1.svg",
          addInfo: "Minimal Bedroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: true,
        },
        {
          image: "/images/ImageP3.svg",
          addInfo: "Minimal Bedroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
        {
          image: "/images/ImageP5.svg",
          addInfo: "Classic Minimal Bedroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: true,
        },
        {
          image: "/images/ImageP7.svg",
          addInfo: "Modern Bedroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
        {
          image: "/images/ImageP2.svg",
          addInfo: "Minimal Bedroom table",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
        {
          image: "/images/ImageP4.svg",
          addInfo: "System Table",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
        {
          image: "/images/ImageP6.svg",
          addInfo: "Modern Medroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
        {
          image: "/images/ImageP8.svg",
          addInfo: "Modern Medroom",
          path: "Decor / Artchitecture",
          tag: "Bedroom",
          like: false,
        },
      ],
    };
  },
  computed: {
    filtered() {
      if (this.name) {
        return this.projects.filter((item) => item.tag === this.name);
      } else return this.projects;
    },
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.projects {
  margin-top: 200px;
}
.projects_filter {
  display: flex;
  flex-direction: row;

  width: 920px;
  margin: auto;
  gap: 61px;
  border-radius: 20px;
  border: solid #cda274 1px;
}
.projects_button {
  position: relative;

  background-color: white;
  border: #cda274;
  color: #292f36;
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
  height: 75px;
}
.projects_button:hover {
  background-color: #cda274;
  color: white;
}

.projects_box {
  padding-top: 60px;
  column-count: 2;
  column-gap: 30px;
}

.projects_item {
  position: relative;
}
.projects_star {
  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;
}
/*.projects_item::after {
  content: url(/public/images/Star3.svg);
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 20px;
  width: 20px;

  cursor: pointer;
}*/
.projects_nav {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 35px;
}
.projects_img {
  position: relative;
}
.projects_title {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}
.projects_path {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
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

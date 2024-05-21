<template>
  <div class="projects_item">
    <img :src="projectData.image" alt="image" class="projects_img" @click="changeLike" />
    <img
      v-if="flagLike"
      src="/images/Star3.svg"
      alt="star"
      class="projects_star"
      @click="changeLike"
    />
    <div class="projects_nav">
      <div class="projects_info">
        <div class="projects_title">{{ projectData.addInfo }}</div>
        <div class="projects_path">{{ projectData.path }}</div>
      </div>
      <svg
        class="projects_arrow"
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
</template>

<script>
export default {
  name: "ItemProjectsComponent",
  props: ["projectData"],
  data() {
    return {
      flagLike: "false",
    };
  },
  created() {
    this.flagLike = this.projectData.like;
  },
  mounted() {},

  methods: {
    changeLike() {
      this.flagLike = !this.flagLike;
      const likeInfo = {
        project: this.projectData,
        like: this.flagLike,
      };

      this.$emit("newLike", likeInfo);
    },
  },
};
</script>
<style>
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
  cursor: pointer;
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
.projects_arrow {
  cursor: pointer;
}
</style>

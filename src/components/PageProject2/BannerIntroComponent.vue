<template>
  <div class="articlesNews">
    <img class="articlesNews_img" src="/images/PhotoBigOP.svg" alt="photo" />
    <div class="articlesNews_intro">
      <h1 class="articlesNews_title">Our Project</h1>
      <h4 class="articlesNews_text">
        <router-link to="home" class="articlesNews_text"> Home</router-link> /
        <router-link to="projects" class="articlesNews_text"> Project</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerIntroComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.articlesNews {
  position: relative;
  margin-top: 45px;
}

.articlesNews_intro {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.articlesNews_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}

.articlesNews_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.articlesNews_intro {
  position: relative;
  margin-top: -180px;
  padding-top: 41px;
  padding-bottom: 41px;
  width: 503px;
  background-color: #fff;
  z-index: 20;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
}
</style>

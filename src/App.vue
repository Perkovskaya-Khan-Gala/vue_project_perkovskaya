<template>
  <div id="app">
    <div class="main_list">
      <div class="main_list_borders borders_one"></div>
      <div class="main_list_borders borders_two"></div>
      <div class="main_list_borders borders_three"></div>
      <div class="main_list_borders borders_four"></div>
      <HeaderComponent />
      <router-view></router-view>
      <!--PageHome />
      <PageBlog />
      <PageBlogDetails />
      <PageStyleGuid />
      <PageProject />
      <PageProjectDetails />

      <ErrorComponent/-->

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

//import PageHome from "./components/PageHome/PageHome.vue";
//import PageBlog from "./components/PageTwo/PageBlog.vue";
//import PageBlogDetails from "./components/PageThree/PageBLogDetails.vue";
//import PageStyleGuid from "./components/PageFour/PageStyleGuid.vue";
//import PageProject from "./components/PageProject2/PageProject.vue";
//import PageProjectDetails from "./components/ProjectDetailsComponent/PageProjectDetails.vue";
//import ErrorComponent from "./components/Page404Component/ErrorComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    // PageHome,
    // PageBlog,
    // PageBlogDetails,
    // PageStyleGuid,
    // PageProject,
    // PageProjectDetails,

    // ErrorComponent,
  },
  created() {
    this.$router.push({ name: "home" });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body {
  background-color: rgb(247 254 231);
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
.main_list {
  position: relative;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  background-color: #fff;
}

.main_list_borders {
  position: absolute;
  border-left: 1px solid #e6e6e6;
  height: 100%;
  z-index: 0;
}

.borders_one {
  left: calc(50% - 600px);
}

.borders_two {
  left: calc(50% - 200px);
}

.borders_three {
  left: calc(50% + 200px);
}

.borders_four {
  left: calc(50% + 600px);
}
</style>

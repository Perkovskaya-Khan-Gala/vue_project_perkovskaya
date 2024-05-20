<template>
  <div id="app">
    <div class="main_list">
      <div class="main_list_borders borders_one"></div>
      <div class="main_list_borders borders_two"></div>
      <div class="main_list_borders borders_three"></div>
      <div class="main_list_borders borders_four"></div>
      <HeaderComponent />

      <BannerComponent></BannerComponent>
      <ProjectTextComponent />
      <SliderComponent2 />

      <!--BannerIntroComponent />
      <ProjectsPaginationComponent /-->

      <!--ErrorComponent></!--ErrorComponent-->

      <!--BannerIntroComponentStyle />
      <ColorComponent />
      <TypographyComponent />
      <ButtonsComponent />
      <IconsComponent />
      <QuotesComponent /-->
      <!--BannerIntroComponent />
      <PostComponent></--PostComponent>
      <ArticlesNewsComponent /-->

      <!--BannerComponent />
      <BlogComponent /-->

      <!--MainArticleComponent />
      <ProjectsComponent />
      <InfoComponent />
      <ArticlesNewsMiniComponent /-->

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

//import ErrorComponent from "./components/Page404Component/ErrorComponent.vue";

//import BannerComponent from "./components/PageThree/BannerComponent.vue";
//import BlogComponent from "./components/PageThree/BlogComponent.vue";

//import BannerIntroComponent from "./components/PageTwo/BannerIntroComponent.vue";
//import PostComponent from "./components/PageTwo/PostComponent.vue";
//import ArticlesNewsComponent from "./components/PageTwo/ArticlesNewsComponent.vue";

//import MainArticleComponent from "./components/PageHome/MainArticleComponent.vue";
//import ProjectsComponent from "./components/PageHome/ProjectsComponent.vue";
//import InfoComponent from "./components/PageHome/InfoComponent.vue";
//import ArticlesNewsMiniComponent from "./components/PageHome/ArticlesNewsMiniComponent.vue";

//import BannerIntroComponentStyle from "./components/PageFour/BannerIntroComponent.vue";
//import ColorComponent from "./components/PageFour/ColorComponent.vue";
//import TypographyComponent from "./components/PageFour/TypographyComponent.vue";
//import ButtonsComponent from "./components/PageFour/ButtonsComponent.vue";
//import IconsComponent from "./components/PageFour/IconsComponent.vue";
//import QuotesComponent from "./components/PageFour/QuotesComponent.vue";

//import BannerIntroComponent from "./components/PageProject/BannerIntroComponent.vue";
//import ProjectsPaginationComponent from "./components/PageProject/ProjectsPaginationComponent.vue";

import BannerComponent from "./components/ProjectDetailsComponent/BannerComponent.vue";
import ProjectTextComponent from "./components/ProjectDetailsComponent/ProjectTextComponent.vue";
import SliderComponent2 from "./components/ProjectDetailsComponent/SliderComponent2.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    //BannerComponent,
    //BlogComponent,
    // BannerIntroComponent,
    // PostComponent,
    // ArticlesNewsComponent,
    //MainArticleComponent,
    //ProjectsComponent,
    //InfoComponent,
    // ArticlesNewsMiniComponent,

    //BannerIntroComponentStyle,
    //ColorComponent,
    //TypographyComponent,
    //ButtonsComponent,
    //IconsComponent,
    // QuotesComponent,

    //ErrorComponent,

    // BannerIntroComponent,
    //  ProjectsPaginationComponent,

    BannerComponent,
    ProjectTextComponent,
    SliderComponent2,
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

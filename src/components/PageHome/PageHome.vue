<template>
  <div>
    <MainArticleComponent />
    <ProjectsComponent />
    <InfoComponent />
    <ArticlesNewsMiniComponent />
  </div>
</template>

<script>
import MainArticleComponent from "./MainArticleComponent.vue";
import ProjectsComponent from "./ProjectsComponent.vue";
import InfoComponent from "./InfoComponent.vue";
import ArticlesNewsMiniComponent from "./ArticlesNewsMiniComponent.vue";
export default {
  name: "PageHome",
  components: {
    MainArticleComponent,
    ProjectsComponent,
    InfoComponent,
    ArticlesNewsMiniComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

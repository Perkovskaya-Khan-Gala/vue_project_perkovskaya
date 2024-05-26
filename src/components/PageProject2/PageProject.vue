<template>
  <div>
    <BannerIntroComponent />
    <ProjectsPaginationComponent />
  </div>
</template>

<script>
import BannerIntroComponent from "./BannerIntroComponent.vue";
import ProjectsPaginationComponent from "./ProjectsPaginationComponent.vue";
export default {
  name: "PageProject",
  components: {
    BannerIntroComponent,
    ProjectsPaginationComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

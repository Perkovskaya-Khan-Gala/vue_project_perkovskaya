<template>
  <div>
    <BannerComponent></BannerComponent>
    <ProjectTextComponent />
    <SliderComponent2 />
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
import ProjectTextComponent from "./ProjectTextComponent.vue";
import SliderComponent2 from "./SliderComponent2.vue";
export default {
  name: "PageProjectDetails",
  components: { BannerComponent, ProjectTextComponent, SliderComponent2 },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

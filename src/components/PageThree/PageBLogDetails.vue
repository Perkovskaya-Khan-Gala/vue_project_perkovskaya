<template>
  <div>
    <BannerComponent />
    <BlogComponent />
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
import BlogComponent from "./BlogComponent.vue";
export default {
  name: "PageBLogDetails",
  components: {
    BannerComponent,
    BlogComponent,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

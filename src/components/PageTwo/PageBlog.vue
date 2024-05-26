<template>
  <div>
    <BannerIntroComponent />
    <PostComponent />
    <ArticlesNewsComponent />
  </div>
</template>

<script>
import BannerIntroComponent from "./BannerIntroComponent.vue";
import PostComponent from "./PostComponent.vue";
import ArticlesNewsComponent from "./ArticlesNewsComponent.vue";
export default {
  name: "PageBlog",
  components: {
    BannerIntroComponent,
    PostComponent,
    ArticlesNewsComponent,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

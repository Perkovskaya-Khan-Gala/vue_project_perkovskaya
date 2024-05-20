<template>
  <div>
    <div class="slider-container center">
      <div class="slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-bind:style="{ transform: 'translateX(' + index * -100 + '%)' }"
        >
          <img :src="activeSlide.image" />
        </div>
      </div>
      <img class="slider_zoom" src="/images/ZoomIcon.svg" alt="" />
    </div>
    <div class="controls">
      <input type="radio" name="pagination" value="0" @click="checked(0)" />
      <input type="radio" name="pagination" value="1" @click="checked(1)" />
      <input type="radio" name="pagination" value="2" @click="checked(2)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderComponent",
  data() {
    return {
      slides: [
        { image: "/images/ImageSlider.svg", isActive: true },
        { image: "/images/Image1.svg", isActive: false },
        { image: "/images/Image2.svg", isActive: false },
      ],
    };
  },
  computed: {
    activeSlide() {
      return this.slides.find((slide) => slide.isActive);
    },
  },
  mounted() {
    // setInterval(() => {
    //    this.nextSlide();
    // }, 5000);
  },
  methods: {
    checked(index) {
      const currentSlideIndex = this.slides.findIndex((slide) => slide.isActive);
      this.slides[currentSlideIndex].isActive = false;
      this.slides[index].isActive = true;
    },
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.slider {
  display: flex;
  width: 300%;
}
.slider img {
  width: 100%;
}
.slider_zoom {
  position: absolute;
  z-index: 20;
  left: 870px;
  top: 320px;
  cursor: pointer;
}
.controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}
.controls button {
  margin: 0 10px;
}
</style>

<template>
  <div class="projects center">
    <router-link to="projects">
      <h1 class="projects_title">Follow Our Projects</h1></router-link
    >
    <p class="projects_text">
      It is a long established fact that a reader will be distracted by the of readable
      content of page lookings at its layouts points
    </p>
    <div class="projects_box">
      <div class="projects_item">
        <img class="projects_img" src="/images/Image1.svg" alt="" />
        <div class="projects_display">
          <div>
            <h3 class="projects_item_title">Modern Kitchen</h3>
            <p class="projects_item_text">Decor / Artchitecture</p>
          </div>
          <router-link to="projectdetails">
            <img class="projects_arrow" src="/images/Ellipse.svg" alt="arrow" />
          </router-link>
        </div>
      </div>
      <div class="projects_item">
        <img class="projects_img" src="/images/Image2.svg" alt="" />
        <div class="projects_display">
          <div>
            <h3 class="projects_item_title">Modern Kitchen</h3>
            <p class="projects_item_text">Decor / Artchitecture</p>
          </div>
          <router-link to="projectdetails"
            ><img class="projects_arrow" src="/images/Ellipse.svg" alt="arrow"
          /></router-link>
        </div>
      </div>
      <div class="projects_item up">
        <img class="projects_img" src="/images/Image3.svg" alt="" />
        <div class="projects_display">
          <div>
            <h3 class="projects_item_title">Modern Kitchen</h3>
            <p class="projects_item_text">Decor / Artchitecture</p>
          </div>
          <router-link to="projectdetails"
            ><img class="projects_arrow" src="/images/Ellipse.svg" alt="arrow"
          /></router-link>
        </div>
      </div>
      <div class="projects_item up">
        <img class="projects_img" src="/images/Image4.svg" alt="" />
        <div class="projects_display">
          <div>
            <h3 class="projects_item_title">Modern Kitchen</h3>
            <p class="projects_item_text">Decor / Artchitecture</p>
          </div>
          <router-link to="projectdetails"
            ><img class="projects_arrow" src="/images/Ellipse.svg" alt="arrow"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.projects {
  margin-top: 96px;
}

.projects_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292f36;
}

.projects_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #4d5053;
  margin: auto;

  width: 737px;
  margin-top: 8px;
}

.projects_box {
  margin-top: 93px;
  display: grid;
  grid-template-columns: repeat(2, 547px);
  gap: 105px;
  z-index: 20;
  position: relative;
}

.projects_display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

.projects_item_title {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}

.projects_item_text {
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

.up {
  margin-top: -48px;
}
</style>

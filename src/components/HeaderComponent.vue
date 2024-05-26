<template>
  <nav class="header center">
    <div class="header_left">
      <router-link to="home"><img src="/images/Logo.svg" alt="Logo" /></router-link>
      <router-link to="home"> <div href="#" class="name">Interno</div></router-link>
    </div>
    <div class="header_right">
      <router-link to="home"> <div href="#" class="header_link">Home</div></router-link>
      <router-link to="projects"
        ><div href="#" class="header_link">Project</div></router-link
      >
      <router-link to="blog"><div href="#" class="header_link">Blog</div></router-link>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.header {
  position: relative;
  padding-top: 44px;
  margin-bottom: 57px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  z-index: 20;
}
.header_left {
  display: flex;
  gap: 8px;
  align-items: center;
}
.header_right {
  display: flex;
  gap: 30px;
}

.header_link {
  color: #292f36;
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
}

.name {
  color: #292f36;

  font-family: DM Serif Display;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  text-align: left;
}
</style>

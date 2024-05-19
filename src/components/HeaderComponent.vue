<template>
  <nav class="header center">
    <div class="header_left">
      <a href="#"><img src="/images/Logo.svg" alt="Logo" /></a>
      <a href="#" class="name">Interno</a>
    </div>
    <div class="header_right">
      <a href="#" class="header_link">Home</a>
      <a href="#" class="header_link">Project</a>
      <a href="#" class="header_link">Blog</a>
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

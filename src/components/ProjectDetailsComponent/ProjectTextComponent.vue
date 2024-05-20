<template>
  <div class="projectdetails_box center">
    <div class="projectdetails_title">Minimal Look Bedrooms</div>
    <div class="projectdetails_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
      dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.
      Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut
      dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
    </div>
    <div class="projectdetails_text add_height">
      In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus.
      Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque
      Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis.
      Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus
      porttitor.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPerkovskayaProjectTextComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.projectdetails_box {
  width: 658px;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 100px;
}
.projectdetails_title {
  margin-top: 11px;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
}
.projectdetails_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}
.add_height {
  padding-top: 20px;
}
</style>

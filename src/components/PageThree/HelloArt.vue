<template>
  <div>
    <ul>
      <li v-for="item in filtered" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloArt",
  props: ["name"],
  data: () => ({
    articleList: [
      {
        id: 0,
        title: "Let’s Get Solution for Building Construction Work",
        tag: "Kitchen",
      },
      {
        id: 1,
        title: "Design sprints are great",
        tag: "Bedroom",
      },
      {
        id: 2,
        title: "Design sprints are great in Kitchen",
        tag: "KitchenPlanning",
      },
      {
        id: 3,
        title: "Lorem asg awesfg ",
        tag: "Architecture",
      },
      {
        id: 4,
        title: "Lorem eef jnjn odfg wetfgrgw rweg",
        tag: "Bedroom1",
      },
      {
        id: 5,
        title: "Design sprints are great in Kitchen sdbvas adgbafsb adfgb",
        tag: "KitchenPlanning",
      },
    ],
  }),
  computed: {
    filtered() {
      if (this.name) {
        return this.articleList.filter((item) => item.tag === this.name);
      } else return this.articleList;
    },
  },
};
</script>

<style scoped>
ul li {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;

  margin-bottom: 21px;
  list-style-type: none;
  cursor: pointer;
}
</style>

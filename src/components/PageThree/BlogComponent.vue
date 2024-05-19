<template>
  <div class="blog center">
    <div class="blog_articles">
      <div v-if="name === 'Kitchen'" class="blog_article">
        <h2 class="blog_header">Let’s Get Solution for Building Construction Work</h2>
        <img class="blog_img" src="/images/Image_blog1.svg" alt="" />
        <div class="blog_data">
          <p class="blog_data_text">26 December,2022</p>
          <p class="blog_data_text">Interior / Home / Decore</p>
        </div>
        <div class="blog_article_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
          in.Contrary to popular belief.There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some form, by
          injecthumour, or randomised words which don't look even slightly believable.
        </div>
        <br /><br />
        <div class="blog_article_text">
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary.
        </div>
      </div>

      <img class="blog_quotes" src="/images/Quotes.svg" alt="" />

      <div v-if="name === 'Bedroom'" class="blog_article">
        <h2 class="blog_header">Design sprints are great</h2>
        <div class="blog_article_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
          in.Contrary to popular belief.There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered.
        </div>
        <div class="blog_list">
          <ol class="blog_article_text">
            <li class="blog_text_list">
              Contrary to popular belief.There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered.
            </li>
            <li class="blog_text_list">
              Contrary to popular belief.There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered.
            </li>
            <li class="blog_text_list">
              Contrary to popular belief.There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered.
            </li>
          </ol>
        </div>
        <img class="blog_img" src="/images/Image_blog2.svg" alt="" />
        <div class="blog_article_text blog_margintop">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
          in.Contrary to popular belief.There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered.
        </div>
      </div>

      <HelloArt :name="name" />
    </div>
    <div class="blog_tags">
      <div class="blog_tags_heading">Tags</div>
      <div class="blog_tags_buttons">
        <button @click="name = 'Kitchen'" class="blog_tags_button">Kitchen</button>
        <button @click="name = 'Bedroom'" class="blog_tags_button">Bedroom</button>
        <button @click="name = 'Building'" class="blog_tags_button">Building</button>
        <button @click="name = 'Architecture'" class="blog_tags_button">
          Architecture
        </button>
        <button @click="name = 'KitchenPlanning'" class="blog_tags_button">
          Kitchen Planning
        </button>
        <button @click="name = 'Bedroom1'" class="blog_tags_button">Bedroom1</button>
      </div>
    </div>
  </div>
</template>

<script>
import HelloArt from "./HelloArt.vue";
export default {
  name: "BlogComponent",
  components: { HelloArt },
  data: () => ({
    name: "Kitchen",
  }),
};
</script>

<style scoped>
.blog {
  display: grid;
  grid-template-columns: 804px 345px;
  gap: 52px;
  margin-top: 200px;
  min-height: calc(100vh - 277px);
}

.blog_img {
  position: relative;
}

.blog_header {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
  cursor: pointer;
  margin-bottom: 21px;
}

.blog_data {
  margin-top: 46px;
  display: flex;
  gap: 409px;
  margin-bottom: 48px;
}

.blog_data_text {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.blog_list {
  width: 800px;
  margin-top: 24px;
  margin-bottom: 44px;
}

ol {
  list-style-type: none;
  counter-reset: num;
  margin: 0 20px 0 20px;

  font-size: 18px;
}

.blog_text_list {
  position: relative;
  margin: 0 0 32px 0;
  padding: 0 0 10px 0;

  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;

  color: #4d5053;
}

ol li:before {
  content: counter(num) ".";
  counter-increment: num;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -26px;
  width: 20px;
  color: #cda274;
  text-align: right;
  font-size: 14px;
}

.blog_article_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4d5053;
}

.blog_quotes {
  margin-top: 35px;
  margin-bottom: 27px;
}

.blog_margintop {
  margin-top: 35px;
}

.blog_tags_heading {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292f36;
  margin-bottom: 24px;
}

.blog_tags_buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.blog_tags_button {
  border-radius: 10px;
  border: none;
  background-color: #f4f0ec;
  padding-left: 30px;
  padding-right: 30px;
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292f36;
}

.blog_tags_button:hover {
  background-color: #292f36;
  color: #fff;
}
</style>

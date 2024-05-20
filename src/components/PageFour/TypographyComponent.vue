<template>
  <div class="typo center">
    <div class="typo_container">
      <div class="typo_box">
        <div class="typo_left">
          <div class="typo_title">Typography</div>
          <div class="typo_text">Headings, body and other common text elements.</div>
        </div>
        <div class="typo_right">
          <h1 class="typo_example_big">Display 01 Text</h1>
          <p class="typo_font">DM Serif Display - 85px</p>
          <div class="typo_example_box">
            <div class="typo_examples">
              <h1 class="typo_example_one">Heading 01 Text</h1>
              <p class="typo_font">DM Serif Display - 50px</p>
            </div>
            <div class="typo_examples">
              <h1 class="typo_example_two">Heading 02 Text</h1>
              <p class="typo_font">DM Serif Display - 35px</p>
            </div>
            <div class="typo_examples">
              <h1 class="typo_example_three">Heading 03 Text</h1>
              <p class="typo_font">DM Serif Display - 25px</p>
            </div>
            <div class="typo_examples">
              <h1 class="typo_example_four">Heading 04 Text</h1>
              <p class="typo_font">DM Serif Display - 22px</p>
            </div>
            <div class="typo_examples">
              <h1 class="typo_example_five">Heading 05 Text</h1>
              <p class="typo_font">DM Serif Display - 20px</p>
            </div>
            <div class="typo_examples">
              <h1 class="typo_example_six">Heading 06 Text</h1>
              <p class="typo_font">DM Serif Display - 18px</p>
            </div>
          </div>
        </div>
      </div>
      <div class="typo_box">
        <div class="typo_left">
          <div class="typo_title">Paragraph</div>
          <div class="typo_text">Paragraph, body and other common text elements.</div>
        </div>
        <div class="typo_right cut_width">
          <div class="typo_example_five">Large Paragraph</div>
          <div class="typo_text add_height_two">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the when an
            unknown printer took a galley of type and scrambled it to make a type specimen
            book.
          </div>
          <div class="typo_example_five add_height">Medium Paragraph</div>
          <div class="typo_text add_height_two">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard.
          </div>
          <div class="typo_example_five add_height">Small Paragraph</div>
          <div class="typo_text add_height_two">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </div>
        </div>
      </div>
      <div class="typo_box">
        <div class="typo_left">
          <div class="typo_title">Text</div>
          <div class="typo_text typo_width">This is some text inside of a div block.</div>
        </div>
        <div class="typo_right typo_width_two">
          <div class="typo_text add_height_three">
            Lorem Ipsum is simply dummy text of the printing and typesetting<br />
            industry.
          </div>
          <div class="typo_example_five add_height_three">
            Lorem Ipsum is simply dummy text of the printing and<br />
            typesetting industry.
          </div>
          <div class="typo_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
      </div>
      <div class="typo_box">
        <div class="typo_left">
          <div class="typo_title">List</div>
          <div class="typo_text typo_width">This is some List inside of a div block.</div>
        </div>
        <div class="typo_right">
          <div class="blog_list">
            <ol class="blog_article_text">
              <li class="blog_text_list">We provide high quality design services.</li>
              <li class="blog_text_list">Project on time and Latest Design.</li>
              <li class="blog_text_list">
                Scientific Skills For getting a better result.
              </li>
              <li class="blog_text_list">Renovations Benefit of Service</li>
              <li class="blog_text_list">We are confident about our projects.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypographyComponent",
  props: {},
};
</script>

<style scoped>
.typo {
  margin-top: 100px;
  position: relative;
}
.typo_container {
  background-color: #f6f6f6;
  padding-top: 155px;
  padding-bottom: 21px;
  border-radius: 70px;
}
.typo_box {
  display: flex;
  gap: 42px;
  margin-bottom: 134px;
}
.typo_left {
  width: 310px;
  padding-left: 55px;
}
.typo_right {
  padding-right: 55px;
  width: 731px;
}
.typo_example_box {
  margin-top: 70px;
}
.typo_examples {
  width: 350px;
  border-bottom: solid #292f36 1px;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.typo_font {
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: left;
  color: #cda274;
}
.typo_example_big {
  font-family: DM Serif Display;
  font-size: 85px;
  font-weight: 400;
  line-height: 106.25px;
  text-align: left;
  color: #292f36;
}
.typo_example_one {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
}
.typo_example_two {
  font-family: DM Serif Display;
  font-size: 35px;
  font-weight: 400;
  line-height: 43.75px;
  text-align: left;
  color: #292f36;
}
.typo_example_three {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
  text-align: left;
  color: #292f36;
}
.typo_example_four {
  font-family: DM Serif Display;
  font-size: 22px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: left;
  color: #292f36;
}
.typo_example_five {
  font-family: DM Serif Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #292f36;
}
.typo_example_six {
  font-family: DM Serif Display;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.5px;
  text-align: left;
  color: #292f36;
}

.typo_title {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
  text-align: left;
  color: #292f36;
  margin-bottom: 19px;
}
.typo_text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
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
  margin: 0 0 25px 0;
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
  content: counter(num);
  counter-increment: num;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -26px;
  width: 20px;
  color: #cda274;
  text-align: right;
  font-size: 20px;
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

.cut_width {
  width: 659px;
}
.add_height {
  margin-top: 40px;
}
.add_height_two {
  margin-top: 19px;
}
.add_height_three {
  margin-bottom: 50px;
}
.typo_width {
  width: 254px;
}
.typo_width_two {
  width: 674px;
}
</style>

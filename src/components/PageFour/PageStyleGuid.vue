<template>
  <div>
    <BannerIntroComponentStyle />
    <ColorComponent />
    <TypographyComponent />
    <ButtonsComponent />
    <IconsComponent />
    <QuotesComponent />
  </div>
</template>

<script>
import BannerIntroComponentStyle from "./BannerIntroComponent.vue";
import ColorComponent from "./ColorComponent.vue";
import TypographyComponent from "./TypographyComponent.vue";
import ButtonsComponent from "./ButtonsComponent.vue";
import IconsComponent from "./IconsComponent.vue";
import QuotesComponent from "./QuotesComponent.vue";
export default {
  name: "ProjectPerkovskayaPageStyleGuid",
  components: {
    BannerIntroComponentStyle,
    ColorComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    QuotesComponent,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

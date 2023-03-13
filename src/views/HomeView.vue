<template>
  <Carousel/>
</template>

<script lang="ts">
import Carousel from "@/components/caroushel/Carousel.vue";
import Vue from "vue";

export default Vue.extend({
  name: 'Home',

  components: {
    Carousel
  },
})
</script>

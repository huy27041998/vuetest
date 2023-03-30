<template>
  <div>
    <ProductAll/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductAll from "@/components/product.all/ProductAll.vue";

export default Vue.extend({
  name: 'Home',

  components: {
    ProductAll
  },
})
</script>

<template>
  <v-app>
    <Appbar></Appbar>
    <Navbar></Navbar>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Appbar from "@/components/appbar/Appbar.vue";
import Navbar from "@/components/navbar/Navbar.vue";
export default Vue.extend({
  name: 'App',
  components: {Navbar, Appbar},
  data: () => ({
    //
  }),
});
</script>

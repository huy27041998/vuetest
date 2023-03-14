<style src="./Navbar.css"></style>
<template src="./Navbar.html"></template>
<script>
let PATH = process.env.NODE_ENV === 'production' ? '/vuetest/' : '/';
export default {
  data: () => ({
    rootPath: PATH,
    activeBtn: 0,
    routes: [
      {path: "", name: "common.home_page"},
      {path: "product", name: "common.product"},
      {path: "about", name: "common.about"}
    ]
  })
}
</script>
<style scoped src="./Appbar.css">

</style>

<template src="./Appbar.html">

</template>
<script>
let PATH = process.env.NODE_ENV === 'production' ? '/vuetest/' : '/';
export default {
  props: {},
  data: () => ({
    rootPath: PATH,
    activeBtn: 0,
    routes: [
      {path: "", name: "common.home_page", params: {}},
      {path: "product", name: "common.doKho", params: {filter: 'do-kho'}},
      {path: "product", name: "common.doTuoiSong", params: {filter: 'do-tuoi-song'}},
      {path: "product", name: "common.ruou", params: {filter: 'ruou'}},
      {path: "about", name: "common.about", params: {}}
    ],
    toUrlParam: (param) => {
      const result = new URLSearchParams(param).toString()
      if (result.length > 0)
        return '?' + result
      return ''
    },
    icons: {
      iconfont: 'faSvg'
    },
  })
}
</script>
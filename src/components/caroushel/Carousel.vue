<style src="./Carousel.css"></style>
<template src="./Carousel.html"></template>
<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
      {
        src: 'caphe.png',
      },
      {
        src: 'bomotnang.png',
      },
    ],
    getUrl(index) {
      const url = this.items[index].src;
      if (url.startsWith("http")) return url;
      return require('@/assets/' + url)
    }
  }),
}
</script>
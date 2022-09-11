<template>
  <div class="main-page-photo">
      <img src="~/assets/homePage/homePagePhoto.png" alt="Matteo's Photo" style="width: 90%;">
      <h1 class="main-page-name">
          MATTEO DELL'ACQUA
      </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "IndexPage"
    }
  },
  head() {
    return {
      title: "Matteo Dell'Acqua",
      meta: [
        {charset: "UTF-8"},
        {"http-equiv": "X-UA-Compatible", content: "IE=edge"},
        {name: "viewport", content: "width=device-width, initial-scale=1.0"}
      ]
    }
  }
}
</script>

<style>
.main-page-photo {
    position: relative;
}

.main-page-name {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>

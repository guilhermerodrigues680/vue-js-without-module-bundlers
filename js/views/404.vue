<template>
  <div>
    <p>Pagina nao encontrada</p>
    <p>A página {{pathNaoEncontrado}} não existe. :/</p>
  </div>
</template>

<script>
module.exports = {
  mounted () {
    console.log(this, 'Hello World 404', this.$router.currentRoute.path)
  },

  computed: {
    pathNaoEncontrado: function () {
      return this.$router.currentRoute.path
    }
  }
}
</script>

<style scoped>
  span {
    background-color: pink;
  }
</style>
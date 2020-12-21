<template>
  <div>
    <h1>Home</h1>
    <p>Home</p>
    <app-world></app-world>
  </div>
</template>

<script>
module.exports = {
  components: {
    'app-world': httpVueLoader('../../js/components/AppWorld.vue')
  },

  mounted () {
    console.log('Hello World')
  }
}
</script>

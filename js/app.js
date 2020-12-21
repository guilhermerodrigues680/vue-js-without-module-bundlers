import Vue from '../web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '../web_modules/http-vue-loader/src/httpVueLoader.js'

const App = new Vue({
  el: '#app',

  components: {
    'app-world': httpVueLoader('./js/components/AppWorld.vue')
  },
})

export default App;

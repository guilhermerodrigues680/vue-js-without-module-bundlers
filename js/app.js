import Vue from '../web_modules/vue/dist/vue.esm.browser.js'
import VueRouter from '../web_modules/vue-router/dist/vue-router.esm.browser.js'
import router from './router/index.js'

Vue.use(VueRouter);

const App = new Vue({
  router: router,
  el: '#app'
})

export default App;

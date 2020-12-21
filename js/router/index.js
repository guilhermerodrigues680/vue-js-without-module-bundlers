import VueRouter from '../../web_modules/vue-router/dist/vue-router.esm.browser.js'
import httpVueLoader from '../../web_modules/http-vue-loader/src/httpVueLoader.js'

// const pageEx = { template: '<div>Ex</div>' }

const routes = [
    { path: '/', component: httpVueLoader('./js/views/Home.vue') },
    { path: '/foo1', component: httpVueLoader('./js/views/Foo.vue') },
    { path: '/bar1', component: httpVueLoader('./js/views/Bar.vue') },
    { path: '*', component: httpVueLoader('./js/views/404.vue') }
]

const router = new VueRouter({
    routes: routes
})

export default router
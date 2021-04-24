import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"
import VueRouter from 'vue-router';
import MovieInfo from './components/MovieInfo'
import Home from './components/Home'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home,
            name: "home",

        }, {
            path: '/info/:id',
            component: MovieInfo,
            name: "info",


            props: {
                default: true,
                // function mode, more about it below
                sidebar: route => ({ search: route.query.id })
            }

        }

    ]
})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
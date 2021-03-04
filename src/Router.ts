import Router from 'vue-router';

import Login from './routes/Login.vue';

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ],
})

import Router from 'vue-router';

import Login from './routes/Login.vue';
import NotFound from './routes/NotFound.vue';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound
        },
    ],
})

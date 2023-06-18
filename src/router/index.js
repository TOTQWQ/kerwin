import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home' //重定向到前台首页
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Admin/admin.vue'),
        children: [
            {
                path: '/admin',
                redirect: '/admin/login'
            },
            {
                path: '/admin/index',
                component: () => import('../views/Admin/index.vue'),
            },
            {
                path: '/admin/login',
                component: () => import('../views/Admin/login.vue'),
            },
        ]
    },
    {
        path: '/home',
        name: 'home',
        alias: '/homes', //别名
        component: () => import('../views/Home/home.vue'),
        children: [
            {
                path: '/home',
                redirect: '/home/index',
                meta: {
                    requiredAuth: true
                }
            },
            {
                name: 'login',
                path: '/home/login',
                component: () => import('../views/Home/login.vue')
            },
            {
                path: '/home/index',
                component: () => import('../views/Home/index.vue'),
                meta: {
                    requiredAuth: true
                }
            },
            {
                path: '/home/films',
                component: () => import('../views/Home/films.vue'),
                meta: {
                    transition: ''
                },
                children: [
                    {
                        path: '/home/films',
                        redirect: '/home/films/nowplaying'
                    },
                    {
                        path: '/home/films/comingsoon',
                        component: () => import('../views/Home/films/Comingsoon.vue'),
                        meta: {
                            requiredAuth: true
                        },
                    },
                    {
                        path: '/home/films/nowplaying',
                        component: () => import('../views/Home/films/Nowplaying.vue'),
                        meta: {
                            requiredAuth: true
                        },
                    },
                ]
            },
            {
                path: '/home/cinemas',
                component: () => import('../views/Home/cinemas.vue'),
                meta: {
                    requiredAuth: true
                }
            },
            {
                path: '/home/center',
                component: () => import('../views/Home/center.vue')
            },
            {
                name: 'detail',
                path: '/home/detail',
                component: () => import('../views/Home/detail.vue'),
                meta: {
                    requiredAuth: true
                }
            },
            {
                name: 'city',
                path: '/home/city',
                component: () => import('../views/Home/city.vue'),
                meta: {
                    requiredAuth: true
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFound.vue')
    }
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: routes
});

//后台拦截
/* router.beforeEach((to, from, next) => {
    console.log(to.fullPath);
    let isAuthenticated = localStorage.getItem('token');
    if (to.name !== 'login' && !isAuthenticated)
        next({ name: 'login' });
    else
        next();
}); */

//前台拦截
router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem('token');
    if (to.name !== 'login' && !isAuthenticated && !to.meta.requiredAuth)
        next({ name: 'login' });
    else
        next();
});

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'animate__fadeInRightBig' : 'animate__fadeInLeftBig'
});

export default router;
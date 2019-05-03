
export const routers = [
    {
        path: '/',
        redirect: '/joblist'
    },
    {
        path: '/joblist',
        name: 'joblist',
        component: () => import('@/views/job-list')
    },
    {
        path: '/jobdetail/:id',
        name: 'jobdetail',
        props: true,
        component: () => import('@/views/job-detail')
    }
]

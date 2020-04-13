import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'App',
        component: App => require(['@/App.vue'], App)
    },
    {
        path: '/newbook',
        name: 'newbook',
        component: newbook => require(['@/view/viewBook/Book_index.vue'], newbook)
    },
    {
        path: '/staff',
        name: 'staff',
        component: staff => require(['@/view/viewSetUp/staff.vue'], staff)
    },
    {
        path: '/staffTable',
        name: 'staffTable',
        component: staffTable => require(['@/view/viewSetUp/staffTable.vue'], staffTable)
    },
    {
        path: '/staff/role',
        name: 'roueSet',
        component: roueSet => require(['@/components/SetUp/Set_System/Set_Sys_jurisdiction/roueSet.vue'], roueSet)
    },
]

const router = new VueRouter({
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes=[
    {
        path:'/index',
        name:'leftNavigation',
        component: leftNavigation => require(['../view/leftNavigation.vue'], leftNavigation),
    },
    {
    path:'/roueset',
    name:'roueset',
    component: roueset => require(['../components/setUp/roueSet.vue'], roueset)
    },
         {
        path:'/',
        name:'newBooking',
        component: newBooking => require(['../components/booking/newBooking.vue'], newBooking)
        },
        {
        path:'/role',
        name:'roleSetting',
        component: roleSetting => require(['@/components/setUp/system/roleSetting.vue'], roleSetting)
        },
        {
        path:'/roueSet',
        name:'roueSet',
        component: roueSet => require(['@/components/setUp/roueSet.vue'], roueSet)
        }
]

const router=new VueRouter({
    routes
})

export default router
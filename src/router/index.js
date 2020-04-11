import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'leftNavigation',
        component: leftNavigation => require(['../view/leftNavigation.vue'], leftNavigation),
    },
    // {
    // path:'/',
    // name:'headers',
    // component: headers => require(['../components/headers.vue'], headers)
    // },
         {
        path:'/index',
        name:'newBooking',
        component: newBooking => require(['../components/booking/newBooking.vue'], newBooking)
        },
        {
        path:'/nav',
        name:'navLabel',
        component: navLabel => require(['../components/navLabel.vue'], navLabel)
        },
        {
        path:'/homePage',
        name:'homePage',
        component: homePage => require(['../components/homePage.vue'], homePage)
        }
]

const router=new VueRouter({
    routes
})

export default router
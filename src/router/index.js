
import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/home",
            name:'学生管理',
            iconClass:'fa fa-users',
            redirect:'/home/student',
            component: () => import('@/components/home'), //路由懒加载 
            // component:resolve=>require(['@/components/home'],resolve)//异步加载组件
            children:[
                {
                    path:'/home/student',
                    name:'学生列表',
                    iconClass:'fa fa-list',
                    component:()=>import('@/components/Students/StudentList')
                },
                {
                    path:'/home/info',
                    name:'信息列表',
                    iconClass:'fa fa-share-alt',
                    component:()=>import('@/components/Students/InfoList')
                },
                {
                    path:'/home/Infos',
                    name:'信息管理',
                    iconClass:'fa fa-list-alt',
                    component:()=>import('@/components/Students/InfoLists')
                },
                {
                    path:'/home/work',
                    name:'作业列表',
                    iconClass:'fa fa-list-ul',
                    component:()=>import('@/components/Students/WorkList')
                },
                {
                    path:'/home/works',
                    name:'作业管理',
                    iconClass:'fa fa-th-list',
                    component:()=>import('@/components/Students/WorkMent')
                }
            ]
        },
        {
            path: '/login',
            name:'登录',
            hidden:true,
            component: () => import('@/components/login') //路由懒加载 
        },
        {
            path: "/home",
            name:'数据分析',
            iconClass:'fa fa-bar-chart',
            component: () => import('@/components/home'), //路由懒加载 
            // component:resolve=>require(['@/components/home'],resolve)//异步加载组件
            children:[
                {
                    path:'/home/dataview',
                    name:'数据概览',
                    iconClass:'fa fa-area-chart',
                    component:()=>import('@/components/dataAnalysis/DataView')
                },
                {
                    path:'/home/mapview',
                    name:'地图概览',
                    iconClass:'fa fa-line-chart',
                    component:()=>import('@/components/dataAnalysis/MapView')
                },
                {
                    path:'/home/travelmap',
                    name:'旅游地图',
                    iconClass:'fa fa-bar-chart',
                    component:()=>import('@/components/dataAnalysis/TravelMap')
                },
                {
                    path:'/home/scoremap',
                    name:'分数地图',
                    iconClass:'fa fa-line-chart',
                    component:()=>import('@/components/dataAnalysis/ScoreMap')
                }
            ]
        },
        {
            path: "/home",
            name:'用户中心',
            iconClass:'fa fa-user',
            component: () => import('@/components/home'), 
            children:[
                {
                    path:'/users/user',
                    name:'权限管理',
                    iconClass:'fa fa-line-chart',
                    component:()=>import('@/components/Users/User')
                },
            ]
        },
        {
            path: '/',
            redirect:'/login',
            hidden:true,
            component: () => import('@/components/login') 
        },
        {
            path: '/*',
            name:'NotFound',
            hidden:true,
            component: () => import('@/components/NotFound') 
        },
    ],
    mode: "history"
})
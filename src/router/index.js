import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import CompanySearch from "../components/CompanySearch";
import CompanyBase from "../components/CompanyBase";
import RouterBar from "../components/RouterBar";
import Computed from "../components/Computed";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/home',
      component: Home
    },{
      path: '/companysearch',
      component: CompanySearch
    },{
      path: '/companybase/:id',
      component: CompanyBase
    },{
      path: '/companybase/:id',
      component: CompanyBase
    },{
    path:'/corpse',
      component:RouterBar,

      children:[

        {
          path:'',
          component:CompanySearch
        },
        {
          path:'companysearch',
          component:CompanySearch
        },{
          path: 'computed',
          component: Computed
        }
      ]
    }
  ]
})

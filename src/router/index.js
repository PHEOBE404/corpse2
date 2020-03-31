import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import CompanySearch from "../components/CompanySearch";
import CompanyBase from "../components/CompanyBase";
import RouterBar from "../components/RouterBar";
import Computed from "../components/Computed";
import Mulinput from "../components/Mulinput";
import BigData from "../components/BigData";

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
      component: Home,
      name:'home'
    },{
      path: '/companysearch',
      component: CompanySearch
    },
    {
      path: '/bigdata',
      component: BigData

    },
    {
      path: '/computed',
      component: Computed
    },
    {
      path: '/companybase/:id',
      component: CompanyBase
    },{
      path: '/mulinput/:type',
      component: Mulinput
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
        },
        // {
        //   path: 'computed',
        //   component: Computed
        // }
      ]
    }
  ]
})

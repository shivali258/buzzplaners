import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage';
import fixeddeparture from '../components/fixeddepature/fixeddeparture'
import admin from '../components/admin/admin'
import hotel from '../components/hotelpart/hotelpart'
Vue.use(Router);

export default new Router({
  routes: [


{
  path:'',
  name: 'homepage',
  component: homepage,
},
{
  path:'/fixeddeparture',
  name: 'fixeddeparture',
  component: fixeddeparture,
},

{
  path:'/admin',
  name: 'admin',
  component: admin,
},
{
  path: '/hotel',
  name: 'hotel',
  component: hotel
}


  ]
})

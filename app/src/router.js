import Vue from 'vue';
import Router from 'vue-router';

// Route Components
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/auth/Login.vue';
import Register from './views/auth/Register.vue';
import ForgotPw from './views/auth/ForgotPw.vue';
import MyAccount from './views/account/MyAccount.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot',
      name: 'forgotPw',
      component: ForgotPw
    },
    {
      path: '/account',
      name: 'myAccount',
      component: MyAccount
    }
  ]
});

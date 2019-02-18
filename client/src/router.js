/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Characters from './views/Characters.vue';
import NewCharacter from './views/NewCharacter.vue';
import ShowCharacter from './views/ShowCharacter.vue';
import EditCharacter from './views/EditCharacter.vue';
import SignUp from './views/SignUp.vue';
import LogIn from './views/LogIn.vue';


Vue.use(Router);

function loggedRedirectDashboard(to, from ,next){
  if(localStorage.token){
    next('/characters')
  } else{
    next();
  }
}

function isLoggedIn(to, from ,next){
  if(localStorage.token){
    next()
  } else{
    next('/login');
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters,
      beforeEnter: isLoggedIn
    },
    {
      path: '/characters/new',
      name: 'NewCharacter',
      component: NewCharacter,
      beforeEnter: isLoggedIn
    },
    {
      path: '/characters/:id',
      name: 'ShowCharacter',
      component: ShowCharacter,
      beforeEnter: isLoggedIn
    },
    {
      path: '/characters/:id/edit',
      name: 'EditCharacter',
      component: EditCharacter,
      beforeEnter: isLoggedIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      beforeEnter: loggedRedirectDashboard,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
      beforeEnter: loggedRedirectDashboard,
    }
  ],
});

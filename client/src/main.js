import Vue from 'vue';
import App from './App.vue';
import AppFooter from './AppFooter.vue';
import router from './router';



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

new Vue({
  router,
  render: h => h(AppFooter),
}).$mount('#appFooter');

import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import './plugins/codemirror';
import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'hash'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

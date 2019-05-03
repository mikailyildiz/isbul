import Vue from 'vue'
import App from './App.vue'
import { router }  from './router/index';
import BootstrapVue from 'bootstrap-vue'
import './assets/style.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const app = {
  router,
  render: h => h(App),
};

new Vue(app).$mount('#app');

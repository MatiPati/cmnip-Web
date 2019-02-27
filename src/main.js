import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos';
import HighchartsVue from 'highcharts-vue'

AOS.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

Vue.config.productionTip = false

Vue.use(HighchartsVue);

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'boxicons'
import 'aos/dist/aos.css';
import 'animate.css';

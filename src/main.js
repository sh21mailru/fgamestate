import Vue from 'vue';
import App from './App.vue';

import router from './router';

import 'ant-design-vue/dist/antd.css';
import './assets/scss/index.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

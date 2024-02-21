import Vue from 'vue'
// 使用element
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

/* ========== 遍历base工具包内部方法，挂载到vue示例上面 ========== */
import base from '@/common/js/base.js';
Object.keys(base).forEach(item => {
  //将base里面得方法,全部挂载到vue上面,这个在其他地方,就可以用this去获取了
  Vue.prototype[item] = base[item];
});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')

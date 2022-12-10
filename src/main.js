// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入字体图标
import './common/style/style.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入需要的组件
import { Button, Select,Progress  } from 'element-ui';
// import '../node_modules/element-ui/lib/theme-default/index.css'
Vue.use(Element)

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Progress)
// Vue.use(Button)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



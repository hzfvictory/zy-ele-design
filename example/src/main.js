import Vue from 'vue'
import App from './App.vue'
import "./element"
import "./index.scss"

import {Select, EditFormHeader, EnhanceTable, WithSearch} from "zy-ele-design"

Vue.use(Select)
Vue.use(EditFormHeader)
Vue.use(EnhanceTable)
Vue.use(WithSearch)

// Vue.component('my-select', Select)
// Vue.use(Select)

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app')

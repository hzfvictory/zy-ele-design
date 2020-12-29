import Vue from 'vue'
import App from './App.vue'
import "./element"
import "./index.scss"

import {Select, EditFormHeader, EnhanceTable, WithSearch, InputNumber} from "../../index"

Vue.use(Select)
Vue.use(EditFormHeader)
Vue.use(EnhanceTable)
Vue.use(WithSearch)
Vue.use(InputNumber)

// Vue.component('my-select', Select)
// Vue.use(Select)

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';

import EditFormHeader from "./EditFormHeader"
import Select from "./Select"
import TableList from "./TableList"

export default { EditFormHeader, Select, TableList }

Vue.component("table-list", TableList);
Vue.component("my-select", Select);
Vue.component("edit-form-header", EditFormHeader);
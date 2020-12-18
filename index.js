import EditFormHeader from "./packages/components/EditFormHeader"
import EnhanceTable from "./packages/components/EnhanceTable"
import EchartsForVue from "./packages/components/EchartsForVue"
import Select from "./packages/components/Select"
import WithSearch from "./packages/components/WithSearch"

import * as utils from "./utils"

export {EditFormHeader, EnhanceTable, EchartsForVue, Select, WithSearch, utils}

EditFormHeader.install = Vue => Vue.component('edit-form-header', EditFormHeader);
EnhanceTable.install = Vue => Vue.component('enhance-table', EnhanceTable);
EchartsForVue.install = Vue => Vue.component('echarts-for-vue', EchartsForVue);
Select.install = Vue => Vue.component('my-select', Select);
WithSearch.install = Vue => Vue.component('with-search', WithSearch);

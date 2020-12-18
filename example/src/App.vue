<template>
  <div>
    <edit-form-header title="edit-form-header"/>

    <div style="padding: 24px">
      <my-select v-model="val" :data="[{name:122,id:1}]"/>
    </div>

    <div>
      <with-search :searchProps="searchProps">
      </with-search>
      <enhance-table/>
    </div>
  </div>
</template>

<script>
  // import {Select, utils} from "../../index"
  import {utils} from "zy-ele-design"

  const searchFields = [
    {
      key: 'name',
      name: '应用名称/ID',
    },
    {
      key: 'mediaId',
      name: '应用分类',
      type: 'select',
      enums: [{label: '是', value: 1}, {label: '否', value: 0}],
      enumType: {id: 'value', name: 'label'}
    },
    {
      key: 'system',
      name: '系统',
      type: 'datePicker',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() >= Date.now();
        },
      }
    },
    {
      key: 'status',
      name: '状态',
      type: 'select',
      enums: [{label: '是', value: 1}, {label: '否', value: 0}],
      enumType: {id: 'value', name: 'label'}
    }];

  export default {
    components: {},
    data() {
      return {
        val: '',
        searchProps: {
          search: {name: 112},
          fields: searchFields,
          onSearch: this.handleSearch,
          onReset: this.handleReset,
        }
      }
    },
    created() {
      console.log(utils.genID());
    },
    methods: {
      handleSearch(data) {
        console.log(data, '搜索');
      },
      handleReset() {
        console.log('重置');
      }
    }
  }
</script>
### example 

```vue
<template>
    <enhance-table 
        ref="table" 
        :multiple="true" 
        :otherTableParams="otherTableParams" 
        :tableColumn="column"
    />
</template>
<script>
  import EnhanceTable from "../components/EnhanceTable"

  export default {
    data() {
      return {
        otherTableParams: { // table的参数
          props: {
            border: true,
            stripe: true,
            size: 'small',
            'default-sort': {prop: 'createTime', order: 'ascending'}
          }
        },
        otherPaginationParams: {},// 分页的参数
        column: [  // table的列  
          {
            prop: "roleId",
            label: "序号",
            width: 100,
          },
          {
            prop: 'roleName',
            label: "角色名称",
            'width': "110",
            'show-overflow-tooltip': true
          },
          {
            prop: "createTime",
            label: "创建时间",
            sortable: true
          },
          {
            prop: 'roleName',
            label: "角色名称",
            //formatter  完全可以用render代替
            render: (text, record) => {
              // console.log(record);
              return <h4>{text}</h4>
            },
          },
          { // 最后的操作列，可根据list里面展示要操作的按钮，和回调
            type: 'button',
            width: '118',
            label: "设置",
            align: "right",
            list: [
              {title: '查看', disabled: false, styles: {color: '#777'}, cb: this.seeHandle},
              {title: '编辑', cb: this.editHandle},  // cb的形参为当前列的数据，只有一个
              {title: '删除', styles: {color: 'red'}, cb: this.remove, confirm: true, confirmTip: "是否删除当前指标？"} // 微提示 confirm:true 
            ],
            // handleButtons: () => (<div>111</div>)  // 自定义编辑的内容
          }
        ]
      }
    },
    components: {EnhanceTable},
    methods: {
      async queryList() { // 子组件默认的请求名称
        // 因为当前算是父组件，当执行到父组件的created周期才会执行它的子组件，所以这个时候子组件的data的一些方法获取不到，或者可以在mounted周期里面执行异步请求
        const {paginationOptions: {pageSize, currentPage}, handlePageData} = this.$refs.table; // 获取子组件mixins里面的参数
        const {data: {items, page: {totalRecord}}} = await this.$fetch(`http://123.57.68.113:8064/role?pageSize=${pageSize}&pageNum=${currentPage}`, {
          headers: {
            Authentication: '1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc6bfd191ca3beec8f2976a99af3ed7bf494f9388adfce07284fb3113db202d75851a0a2cf8fe34718781122c820673177aa19affc4fd0a081487e934f0d61ac3fd5346ce23f5cf58d52e0688bf2379933521a6859db1c4c301'
          },
        });
        handlePageData(items, totalRecord); // mixin里面统一处理
        // handlePageData(items, 0 , false); // 当数据只有一页，还要展示分页的时候 第三个参数为false
      },
      editHandle(...options) {
        // 参数为当前列的数据
        console.log(options, '编辑');
      },
      seeHandle(...options) {
        console.log(options, '查看');
      },
    },
    created() {
      this.$nextTick(this.queryList);
    },
    mounted() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
```

### options

| Name              | Type       | Default              | Description           |
| :-------------- | :---------- | :----------------- | :----------------------- |
| otherTableParams  | { Object } |   ...   | 列表参数集合 |
| otherPaginationParams   | {Object} |  ... | 分页参数集合      |
| tableColumn | {Array} | []          |  列表column数据 **必须写在data里面 或者单独抽离一个mixins,不会找不到h函数，获取不到上下文**    |
| multiple | {Boolean}  |  false    | 列表是否支持多选    |

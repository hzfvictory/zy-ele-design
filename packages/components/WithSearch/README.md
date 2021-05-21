### fields

```javascript
const searchFields = [
  {
    key: 'name',
    name: '应用名称/ID',
    label: false, // 隐藏label
    styles: {width: '100px'}
  },
  {
    key: 'mediaId', // 数据提交的字段
    name: '应用分类', // label的名字
    type: 'select', // form的类型  默认是 input
    enums: [{label: '是', value: 1}, {label: '否', value: 0}],  // 选框的数据
    enumType: {id: 'value', name: 'label'}, // 选框的数据格式化
    multiple: true,
    collapse: true,
    disabled: true,
    clearable: false,
    defaultValue: []
  },
  {
    key: "ds",
    name: "时间",
    type: "datePicker", 
    dataType: "date", // 单天
    styles: { width: "161px" },
    pickerOptions: {
        // element 时间组件的参数集
        disabledDate(time) {
            return time.getTime() > Date.now();
        },
    },
    defaultValue: setPickerDefaultValue(1, 0)[0], // 默认是时间
	},
  {
    key: 'system',
    name: '系统',
    type: 'datePicker',
    pickerOptions: { // picker的一些参数
      disabledDate(time) {
        return time.getTime() <= Date.now();
      },
    }
  }
];
```

**扩充组件**

<a href="https://tva1.sinaimg.cn/large/008eGmZEly1gnbirz1xajj30920490sq.jpg" target="_blank" rel="noopener noreferrer"><img src="https://tva1.sinaimg.cn/large/008eGmZEly1gnbirz1xajj30920490sq.jpg" alt='图片加载失败'></a>

```javascript
const searchFields = [
  {
      key: 'changetype',
      name: false,
      type: 'select',
      enums: [
        // link: 指向要展示的 form 的 key; placeholder:要展示 form 的 placeholder
        {id: 1, name: '渠道', link: 'channelName', placeholder: '全部渠道'}, 
        {id: 2, name: '渠道号', link: 'channelId', placeholder: '渠道号'}
      ],
      defaultValue: 1,
      clearable: false,
      filterable: false,
      'key-value': false
    },
    {
      key: 'channelName',
      name: false,
      type: 'select',
      enums: [{id: 1, name: 2323}, {id: 2, name: 444}, {id: 3, name: 555}, {id: 4, name: 666}],  // 选框的数据
      placeholder: '全部渠道',
      resetValue: true, // resetValue: 切换后数据重置，默认不重置
    },
    {
      key: 'channelId',
      name: false,
      placeholder: '渠道号',
      hidden: true,
      defaultValue: ''
    },
];
```

### example 

```vue
<template>
    <with-search :searchProps="searchProps">
      // 里面可以写一些额外的按钮
    </with-search>
</template>
<script>
  import WithSearch from "@/components/WithSearch"

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
      enumType: {id: 'value', name: 'label'},
      disabled: true,
      clearable: false,
      defaultValue:[]
    },
    {
      key: 'system',
      name: '系统',
      type: 'datePicker',
      pickerOptions: { 
        disabledDate(time) {
          return time.getTime() <= Date.now();
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
    name: "",
    components: {
      WithSearch
    },
    data() {
      return {
        searchProps: {
          fields: searchFields, 
          onSearch: this.handleSearch, 
          onReset: this.handleReset, 
        }
      }
    }
  }
</script>
```
### options

| 参数名   | 作用                                           | 类型   | 默认值 |
| :------- | :------------------------------------------- | :----- | :----- |
| `fields`   | 必填，搜索表单项, 详细看下表              | array  | []     |
| onSearch | 查询操作                                       | fun    | 无     |
| onReset  | 查询重置操作, 只有设置了此项，重置按钮才会显示 | fun    | 无     |
| formData | 获取form表单的值 | object | {}   |


### fields

| 参数名   | 说明             |  可选值 | 默认值 |
| :------- | :---------- |  :----- | :----- |
|  key   |  传入 Form 组件的 model 中的字段     |   -   |   必填   | 
|  name   |    标签文本     |   false/String    |   必填   | 
|  type   |    前选框类型     |    select   |   input   | 
|  enums   |    前选框的数据     |  -    |  []    | 
|  enumType   |   选框的数据格式化      |  -    |   {id:'id',name:'name'}   | 
|  multiple   |    是否支持多选    |   -   |   -   | false
|  collapse   |    多选后以数字展示选择了多少个数     |  -    |  false    | 
|  key-value   |   select的key-value的形式    |   Boolean   |  true   | 
|  defaultValue   |   选框默认值      |   -   |  undefined    | 
|  disabled   |   禁止使用选框      |   Boolean   |  false    | 
|  clearable   |    是否显示清除按钮     |   Boolean   |  true    | 
|  styles   |    当前组件样式     |   Object   |  -    | 
|  hidden   |    隐藏当前组件样式     |   Boolean   |  false    | 
|  placeholder   |   占位内容    |   String   |  暂不支持时间组件    | 
|  pickerOptions   |   时间格式   |   Object   |  -    | 

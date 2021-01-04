### example 

```javascript
<my-select 
   v-model="formDataCharts.item1" 
   :disId="formDataCharts.item2" // vue建议小驼峰 dis-id=''
   :data="data"
   :clearable=false 
   placeholder="请选择" 
   :key-value="false"
   @change='fn'
   @focus='fn'
/>
```


### options

| Name              | Type       | Default              | Description                    |
| :--------------- | :---------- | :----------------- | :--------------------------- |
| v-model  | {String, Number, Array, Object } |   ''   | v-model |
| clearable   | {Boolean} | false | 是否有一键清空      |
| multiple | {Boolean} | false          | 是否支持多选     |
| collapse | {Boolean} | false          | 多选后以数字展示选择了多少个数     |
| keyValue/key-value | {Boolean} | true          |  key-value的形式展示     |
| disId/dis-id | {String, Number} |  ''          |  单个item不能选择     |
| disAll/dis-all | {Boolean} |   false         | 当前的选框不能使用     |
| type | {Object} |   { name: "name", id: "id"}   | 引导数据的格式转换    |
| data | {Array} |   []   |   当前的数据  |
| placeholder | {String} |   全部 |   placeholder  |
| styles | {Object} | { width: '161px'} |  添加样式「即将废弃」，vue支持直接设置  |
| onFocus/focus | {Function} | (event: Event) |  失去焦点的事件 |
| onChange/change | {Function} | 目前的选中值 |  选中值发生变化时触发	 |

`vue建议小驼峰 例:dis-id=''`



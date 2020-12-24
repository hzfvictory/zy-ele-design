### example 

```javascript
<my-select 
   v-model="formDataCharts.item1" 
   :disId="formDataCharts.item2" // vue建议小驼峰 dis-id=''
   :data="data"
   :clearable=false 
   placeholder="请选择" 
   :key-value="false"
/>
```


### options

| Name              | Type       | Default              | Description                    |
| :--------------- | :---------- | :----------------- | :--------------------------- |
| value  | {String, Number, Array, Object } |   ''   | v-model传进来的值 |
| clearable   | {Boolean} | false | 是否有一键清空      |
| multiple | {Boolean} | false          | 是否支持多选     |
| collapse | {Boolean} | false          | 多选后以数字展示选择了多少个数     |
| keyValue | {Boolean} | true          |  key-value的形式展示     |
| disId | {String, Number} |  ''          |  单个item不能选择     |
| disAll | {Boolean} |   false         | 当前的选框不能使用     |
| type | {Object} |   { name: "name", id: "id"}   | 引导数据的格式转换    |
| data | {Array} |   []   |   当前的数据  |
| placeholder | {String} |   全部 |   placeholder  |
| styles | {Object} | { width: '161px'} |  添加样式「即将废弃」，vue支持直接设置  |
| onFocus | {Function} | '' |  失去焦点的事件 |

`vue建议小驼峰 例:dis-id=''`



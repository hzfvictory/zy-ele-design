### example 

```javascript
<enhance-input-number
    styles="width: 150px"
    v-model="value"
    :lable="[{align:'left',text:'第'},{align:'right',text:'章'}]"
    :attributes="{
      controls:false,
      placeholder:'请输入起始章节'
    }"
    :event="{
      blur:fn
    }"
/>
```


### options

| Name             | Type        | Default            | Description                  |
| :--------------- | :---------- | :----------------- | :--------------------------- |
| v-model  | {Number}| undefined   | v-model |
| attributes | {Object} | {} | 当前的属性,[同element-ui](https://element.eleme.cn/2.14/#/zh-CN/component/input-number#attributes)    |
| event | {Object} |   {}     | 事件   |
| styles | {String} | width: 100%  |  当前表单的样式    | 
| lable | {Array} |    []    |  表单前后的修饰lable； 示例：[{align:'left',text:'第'},{align:'right',text:'章'}]   | 

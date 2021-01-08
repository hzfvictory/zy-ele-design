### example 

目前只能上传一个图片，后期将会支持多个上传，拖拽排序

```javascript
<upload-img
  :action="uploadImage"
  :token="token"
  :formData="formData"
  prop="globalConfig.imgUrl"
  :rule="{
    lt: 300, // kb
    format: "image/jpeg,image/jpg,image/png,image/gif",
    size: {width: 100, height: 100}
   }"
/>
```

### options

| Name              | Type       | Default              | Description                    |
| :--------------- | :---------- | :----------------- | :--------------------------- |
| action  | {String } |  -  | 请求接口 **必填** |
| token | {String} | localStorage.getItem("token") | 响应头的Authentication  |
| formData | {Object} | - |  当前数据集合 |
| prop | {String} | - |  当前数据集合的key	 |
| `rule` | {Object} | 详细看下表 |  图片大小、格式、尺寸校验	 |

### rule

| 参数名   | 说明    |  可选值 | 默认值 |
| :------- | :---------- |  :----- | :----- |
|  lt   |  图片的大小（kb）  |   -   |   -   | 
|  format   |  图片的格式  |   -   |   image/jpeg,image/jpg,image/png,image/gif   | 
|  size   |    图片的尺寸     |    -   |   -   | 




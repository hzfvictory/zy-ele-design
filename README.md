## zy-ele-design

### 介绍

源于日常中后台系统开发不断的积累,让element-ui使用更加得心应手，实现业务的快速迭代,一些高频次自定义业务组件，和一些常用方法库的封装，支持按需打包.

### 安装

```javascript
yarn add zy-ele-design
```

### 使用

**三种用法**

1. 全局声明按需加载
```javascript
// main.js
import Vue from 'vue';
import {Select} from "zy-ele-design"

Vue.use(Select)
```

2.使用component自定义组件名称
```javascript
// main.js
import Vue from 'vue';
import {Select} from "zy-ele-design"

Vue.component('my-select', Select)
```

3. 自定义名称
```javascript
<script>
  import {Select} from  "zy-ele-design"
  export default {
    components: {
      MySelect: Select
    }
  }
</script>
```

### 内置组件

[Select](https://github.com/hzfvictory/zy-ele-design/tree/master/packages/components/Select)

[EnhanceTable](https://github.com/hzfvictory/zy-ele-design/tree/master/packages/components/EnhanceTable)

[WithSearch](https://github.com/hzfvictory/zy-ele-design/tree/master/packages/components/WithSearch)

[...](https://github.com/hzfvictory/zy-ele-design/tree/master/packages/components)

### 内置函数方法
```javascript
// import {utils} from "zy-ele-design"
import * as utils from "zy-ele-design/utils"

utils.fn();
```

### 报错

<a href="https://tva1.sinaimg.cn/large/0081Kckwly1glruqk4nbnj31kw0e276p.jpg" target="_blank" rel="noopener noreferrer"><img src="https://tva1.sinaimg.cn/large/0081Kckwly1glruqk4nbnj31kw0e276p.jpg" alt='图片加载失败'></a>

原因是是组件中使用了jsx,没有被babel编辑，在项目的`vue.config.js`添加一下代码ok了💪

```javascript
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: ['babel-loader']
        }
      ]
    },
  }
};
```

### 使用注意事项

- 该插件必须依赖于ElementUI,使用该插件之前，本地需要安装ElementUI
- 该插件为了适配公司现阶段UI,如有冲突，请自行更改样式
- 该组件开发使用的`ElementUI V2.13.2`版本，如有兼容性问题，请`issues`留言，不定期查看升级


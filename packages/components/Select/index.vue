<template>
  <el-select
      :value="value"
      :style="styles"
      :placeholder="placeholder"
      filterable
      :multiple="multiple"
      :collapse-tags="collapse"
      :clearable="clearable"
      :disabled="disAll"
      @focus="focus"
      @change="change"
      @input="input($event)">
    <el-option
        v-for="(item,index) of data"
        :disabled="item[type['id']] === disId"
        :label="item[type['name']]"
        :value="item[type['id']]"
        :key="item[type['id']] + (index * index)"
    >
      {{renderLabel(item[type['id']],item[type['name']],keyValue)}}
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: "",
    props: {
      value: [String, Number, Array],
      clearable: {
        type: Boolean,
        default: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      collapse: {
        type: Boolean,
        default: false
      },
      keyValue: {
        type: Boolean,
        default: true
      },
      disId: [String, Number],  // 当传进来ID跟当前ID相等 禁止选择
      disAll: [Boolean],  // 禁用
      type: { // 数据的键值
        type: Object,
        default() {
          return {
            name: "name",
            id: "id"
          }
        }
      },
      data: Array,
      placeholder: {
        type: String,
        default: '全部'
      },
      styles: {
        type: Object,
        default() {
          return {
            width: '161px'
          }
        }
      }
    },
    methods: {
      renderLabel(id, val, all) {
        if (all) {
          return id + '一' + val
        }
        return val;
      },
      input(val) {
        this.$emit('input', val);
      },
      focus(ev) {
        this.$emit('onFocus', ev); // 历史遗留
        this.$emit('focus', ev);
      },
      change(val) {
        this.$emit('onChange', val); // 历史遗留
        this.$emit('change', val);
      }
    }
  }
</script>

<template>
    <el-select
            :value="value"
            :style="styles"
            :placeholder="placeholder"
            filterable
            :clearable="clearable"
            @input="change($event)">
        <el-option
                v-for="item of data" :disabled="item[type['id']]===disId"
                :label="item[type['name']]" :value="item[type['id']]"
                :key="item[type['id']]"/>
    </el-select>
</template>

<script>
  export default {
    name: "",
    props: {
      value: [String, Number],
      clearable: {
        type: Boolean,
        default: true
      },
      disId: [String, Number],  // 当传进来ID跟当前ID相等 禁止选择
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
    created() {
    },
    methods: {
      change: function (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

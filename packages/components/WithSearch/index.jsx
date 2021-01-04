import Select from "../Select"

export default {
  data() {
    let searchData = {};
    const {searchProps} = this;
    searchProps.fields?.length && [...searchProps.fields].map((item) => {
      searchData[item.key] = item.defaultValue || undefined;
    })
    return {searchData}
  },
  components: {
    enhanceSelect: Select
  },
  props: {
    searchProps: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  methods: {
    typeInput(item) {
      return (
        <el-form-item prop={item.key}>
          {item.label !== false && <div class="prepend small">{item.name}</div>}
          <el-input
            clearable={true}
            style={{width: '160px', ...item.styles}}
            v-model={this.searchData[item.key]}
            placeholder={`请输入${item.name}`}
          />
        </el-form-item>
      )
    },
    typeSelect(item) {
      return (
        <el-form-item prop={item.key}>
          {item.label !== false && <div class="prepend small">{item.name}</div>}
          <enhance-select
            v-model={this.searchData[item.key]}
            type={item.enumType}
            data={item.enums}
            multiple={item.multiple}
            collapse={item.collapse}
            style={{...item.styles}}
            placeholder="全部"
          />
        </el-form-item>
      )
    },
    typeDatePicker(item) {
      return (
        <el-form-item prop={item.key}>
          {item.label !== false && <div class="prepend small">{item.name}</div>}
          <el-date-picker
            style={{width: '220px', ...item.styles}}
            v-model={this.searchData[item.key]}
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            picker-options={{...this.picker_options, ...item.pickerOptions}}
          />
        </el-form-item>
      )
    },
    handleDom(item) {
      return {
        select: this.typeSelect(item),
        datePicker: this.typeDatePicker(item),
        default: this.typeInput(item),
      }
    },
    typeSearchBtn() {
      const {searchProps: {onReset, onSearch}} = this;
      const searchDom = <el-button type="primary" icon="el-icon-search" onClick={this.handleSearch}>查询</el-button>
      const resetDom = <el-button icon="el-icon-refresh" onClick={this.handleReset}>重置</el-button>
      return (
        <div>
          {onSearch && searchDom}
          {onReset && resetDom}
        </div>
      )
    },
    handleSearch() {
      const {searchProps: {onSearch}} = this;
      onSearch && onSearch(this.searchData)
      // this.$emit('search', this.searchData)
    },
    handleReset() {
      const {searchProps: {onReset}} = this;
      this.$refs['formData'].resetFields();
      // this.searchData = {};
      this.$nextTick(() => {
        onReset && onReset()
      })
    },
    // handlerSearchData(newVal) {
    //   this.searchProps.formData = newVal
    // }
  },
  computed: {
    handlerSearchData() {
      this.searchProps.formData = this.searchData
    }
  },
  // watch: {
  //   searchData: {
  //     // 页面能实时获取到数据
  //     handler: 'handlerSearchData',
  //     deep: true,
  //     immediate: true
  //   },
  // },
  render() {
    const {searchProps: {fields, formData}} = this;
    if (formData) this.handlerSearchData;

    return (
      <div class="searchBox">
        <el-form
          props={{model: this.searchData}}
          label-width="85px"
          ref="formData"
          inline
          class="demo-form-inline"
        >
          {/*form表单*/}
          {
            fields.map((item) => {
              return (
                this.handleDom(item)[item.type || 'default']
              )
            })
          }

          {/* 操作按钮 */}
          <div class="searchBtn" style="float: right">
            {this.typeSearchBtn()}
            {/*额外的操作按钮*/}
            {this.$slots.default}
          </div>
        </el-form>
      </div>
    );
  }
};
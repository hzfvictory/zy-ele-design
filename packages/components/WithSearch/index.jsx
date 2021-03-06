import Select from "../Select"
import "./index.scss"

export default {
  data() {
    let searchData = {};
    const searchProps = this.searchProps || {}; // 兼容老版本
    const {fields = []} = searchProps;

    // 下面循环赋值的时候，一定要拷贝一份，不然响应的是之前的老数据
    fields.length && [...searchProps.fields].map((item) => {
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
      // style={{display: item.hidden ? 'none' : 'inline-block'}}  只能用 display:none，v-if会导致表单重置失效
      return (
        <el-form-item
          prop={item.key}
          class={item.classes}
          style={{display: item.hidden ? 'none' : 'inline-block'}}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <el-input
            clearable={item['clearable'] !== false}
            style={{width: '160px', ...item.styles}}
            v-model={this.searchData[item.key]}
            placeholder={item.placeholder || `请输入${item.name}`}
            disabled={item['disabled']}
          />
        </el-form-item>
      )
    },
    typeSelect(item) {
      return (
        <el-form-item
          prop={item.key}
          class={[item.classes, {'link-form-select': (item.enums && item.enums[0] && item.enums[0].link)}]}
          style={{display: item.hidden ? 'none' : 'inline-block'}}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <enhance-select
            v-model={this.searchData[item.key]}
            type={item.enumType}
            data={item.enums}
            multiple={item.multiple}
            collapse={item.collapse}
            style={{width: ((item.enums && item.enums[0] && item.enums[0].link) ? '90px' : '160px'), ...item.styles}}
            placeholder={item.placeholder || `全部`}
            key-value={item['key-value']}
            clearable={item['clearable'] !== false}
            dis-all={item['disabled']}
            filterable={item['filterable']}
            onChange={(val) => this.changeFormDom(val, item)}
          />
        </el-form-item>
      )
    },
    typeDatePicker(item) {
      return (
        <el-form-item
          prop={item.key}
          class={item.classes}
          style={{display: item.hidden ? 'none' : 'inline-block'}}
        >
          {item.name !== false && <div class="prepend small">{item.name}</div>}
          <el-date-picker
            style={{width: '220px', ...item.styles}}
            v-model={this.searchData[item.key]}
            type={item.dataType || 'daterange'}
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            placeholder={'选择日期'}
            value-format="yyyy-MM-dd"
            picker-options={{...this.picker_options, ...item.pickerOptions}}
            disabled={item['disabled']}
            clearable={item['clearable'] !== false}
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
    changeFormDom(val, item) {
      let enums = item.enums
      if (!enums[0].link) return
      for (let i = 0; i < enums.length; i++) {
        const {key, placeholder, resetValue} = enums[i].link;
        let fieldsItemData = this.searchProps.fields;
        let _index = fieldsItemData.findIndex((list) => list.key === key)
        fieldsItemData[_index].hidden = enums[i].id !== val;
        fieldsItemData[_index].placeholder = placeholder;

        // 处理class
        let classes = fieldsItemData[_index].classes;
        fieldsItemData[_index].classes = classes ? classes : '';
        if (classes && !classes.includes('link-border-left-none')) {
          fieldsItemData[_index].classes += 'link-border-left-none ';
        }

        if (resetValue) {
          this.searchData[fieldsItemData[_index].key] = fieldsItemData[_index].defaultValue
        }
      }
    },
  },
  computed: {
    handlerSearchData() {
      this.searchProps.formData = this.searchData
    }
  },
  render() {
    const {searchProps: {fields, formData}} = this;
    if (formData) this.handlerSearchData;

    return (
      <div class="searchBox">
        <el-form
          {
            ...{
              props: {
                model: this.searchData
              }
            }
          }
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
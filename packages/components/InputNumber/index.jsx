import "./index.scss"

const attributesDefault = {
  precision: 0,
  min: 0,
  step: 1,
  placeholder: '请输入',
  controls: true,
  disabled: false,
}
export default {
  data() {
    return {}
  },
  components: {},
  props: {
    attributes: {
      type: Object, default() {
        return {...attributesDefault}
      }
    },
    event: {
      type: Object,
    },
    styles: {type: String, default: 'width:100%'},
    value: {type: Number, default: undefined},
    lable: {
      type: Array, default() {
        return []
      }
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('input', val);
      this.$emit('change', val)
    },
    prependTitle() {
      const item = this.lable.find((item) => item?.align === 'left');
      return item && <div class="el-input-group__prepend custom_prepend">{item?.text}</div>
    },
    appendTitle() {
      const item = this.lable.find((item) => item?.align === 'right');
      return item && <div class="el-input-group__append custom_append">{item?.text}</div>
    },
    handleClass() {
      const {lable} = this;
      if (lable.length === 1) {
        if (lable[0].align === 'left') return 'input_number_text_left input_border_left_none';
        if (lable[0].align === 'right') return 'input_number_text_left input_border_right_none';
      }
      if (lable.length === 2) {
        if (lable[1].align !== lable[0].align && ['left', 'right'].includes(lable[0].align) && ['left', 'right'].includes(lable[1].align)) {
          return 'input_number_text_left input_border_none';
        }
      }
      return 'input_number_text_left';
    }
  },
  computed: {},
  watch: {},
  render() {
    const {styles, value, attributes, event} = this;
    return (
      <div class={'zy_ele_design_input-number'}>
        {this.prependTitle()}
        <el-input-number
          class={this.handleClass()}
          {...{
            style: styles,
            props: {
              value,
              ...attributesDefault,
              ...attributes
            },
            on: {
              ...event,
              input: this.handleInput
            },
          }}
        />
        {this.appendTitle()}
      </div>
    );
  }
};
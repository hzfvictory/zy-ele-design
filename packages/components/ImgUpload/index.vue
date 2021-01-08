<template>
  <div class="zy-ele-design-upload">
    <el-upload
        :class="src ? 'avatar-uploader avatar-success' :'avatar-uploader'"
        :action="action"
        :headers="{ Authentication: token }"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :on-success="handleAvatarSuccess"
    >
      <i v-if="!src" class="el-icon-plus avatar-uploader-icon"/>
      <template v-else>
        <img :src="src" class="avatar" alt="图片"/>
        <div class="icon-control">
          <i class="el-icon-zoom-in" @click.stop="avatarPreview"/>
          <i class="el-icon-delete" @click.stop="avatarRemove"/>
        </div>
      </template>
    </el-upload>
    <el-dialog :visible.sync="dialogImgVisible">
      <img width="300" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import _ from "lodash"

  const defaultRule = {
    lt: undefined,
    format: "image/jpeg,image/jpg,image/png,image/gif",
    size: {width: undefined, height: undefined}
  }
  export default {
    name: "",
    data() {
      return {
        dialogImgVisible: false,
        dialogImageUrl: undefined,
      }
    },
    props: {
      action: String, // 请求地址
      token: {
        type: String,
        default: localStorage.getItem("token")
      },
      formData: Object,// 数据集合
      prop: String, //当前数据集合的key
      // 图片大小、格式、尺寸
      rule: {
        type: Object,
        default() {
          return {...defaultRule}
        }
      },
    },
    computed: {
      src() {
        return _.get(this.formData, this.prop, undefined)
      },
    },
    methods: {
      // 上传校验
      beforeAvatarUpload(file) {
        const rule = {
          ...defaultRule,
          ...this.rule
        }
        const {lt, format, size = {}} = rule;
        const isJPG = format.split(',').includes(file.type);
        const isLt = lt ? file.size / 1024 < lt : true;

        const {width, height} = size;
        let isSize = true;
        if (width || height) {
          isSize = new Promise(function (resolve, reject) {
            let _URL = window.URL || window.webkitURL
            let img = new Image()
            img.onload = function () {
              let valid = img.width === width && img.height === height;
              valid ? resolve() : reject(img);
            }
            img.src = _URL.createObjectURL(file)
          }).then(
            () => {
              return file;
            },
            (err) => {
              console.log('宽:' + err.width, '长:' + err.height);
              this.$message.error(`上传的图片必须是${width}*${height}!`);
              return Promise.reject();
            }
          )
        }

        if (!isJPG) this.$message.error(`上传图片只能是${format}格式!`);
        setTimeout(() => {
          // 防止两个同时弹出
          if (!isLt) this.$message.error(`上传图片大小不能超过${lt}K!`);
        }, 0)

        return isJPG && isLt && isSize;
      },
      // 上传成功
      handleAvatarSuccess(res) {
        const {data, status, errorMsg} = res;
        if (status === 0) {
          _.set(this.formData, this.prop, data.url)
        } else {
          this.$message.error(errorMsg);
        }
      },
      // 图片删除
      avatarRemove() {
        _.set(this.formData, this.prop, undefined)
      },
      // 图片预览
      avatarPreview() {
        this.dialogImageUrl = this.src;
        this.dialogImgVisible = true;
      },
    }
  }
</script>

<style lang="scss">
  @import "./index.scss";
</style>
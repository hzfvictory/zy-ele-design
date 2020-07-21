<template>
    <div class="form-header">
        <h3 class="form-title">{{title}}</h3>
    </div>
</template>

<script>
  export default {
    name: "",
    props: ['title']
  }
</script>

<style scoped type="text/scss" lang="scss">
    .form-header {
        padding: 0 24px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 4px;
        font-size: 14px;

        color: #262626;
        line-height: 64px;
        margin-bottom: 8px;

        .form-title {
            font-size: 16px;
            font-weight: 600;
        }
    }
</style>
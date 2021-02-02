<template>
    <div class="form-header">
        <h3 class="form-title">{{title}} <i v-if="icon" @click="handleCLick" class="el-icon-info"/></h3>
        <span>{{tip}}</span>
    </div>
</template>

<script>
    export default {
        name: "",
        props: ['title', 'tip', 'icon'],
        methods: {
            handleCLick() {
                return typeof this.icon === "function" ? this.icon() : null;
            }
        }
    }
</script>

<style type="text/scss" lang="scss">
    .form-header {
        padding: 0 24px;
        box-sizing: border-box;
        background: #fff;
        border-radius: 4px;
        font-size: 14px;

        color: #262626;
        line-height: 64px;
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .form-title {
            font-size: 16px;
            font-weight: 600;

            .el-icon-info {
                font-size: 16px;
                cursor: pointer;
            }
        }

        span {
            color: #7F7F7F;
        }
    }
</style>
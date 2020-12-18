<template>
  <div ref="chartContainer"/>
</template>

<script>
  import {echarts} from './echarts'
  import {addListener, removeListener} from 'resize-detector'

  export default {
    name: "",
    data() {
      return {
        chartsOptions: this.option.chartsOptions
      }
    },
    props: ['styles', 'option'],
    methods: {
      resize() {
        // 检测父级的盒子变化
        if (this.myChart.resize) this.myChart.resize();
      }
    },
    watch: {
      option: {
        handler: function (newVal) {
          this.myChart.setOption(newVal.chartsOptions);
          this.chartsOptions = newVal.chartsOptions;
        },
        deep: true
      }
    },
    mounted() {
      const eContainer = this.$refs.chartContainer;
      addListener(eContainer, this.resize);
      if (eContainer) {
        this.myChart = echarts.init(eContainer);
        this.myChart.setOption(this.chartsOptions);
      }
    },
    beforeDestroy() {
      removeListener(this.$refs.chartContainer, this.resize);
      if (this.myChart.dispose) this.myChart.dispose();
    },
  }
</script>
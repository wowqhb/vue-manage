<!-- echarts 公共组件的封装 -->
<template> 
  <!-- ref 相当于 id -->
  <div ref="echart"></div>
</template>

<script>
import * as echart from "echarts";
export default {
  name: "ECharts",
  props: {
    // 折线图或柱状图
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    // 饼状图
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true, //深度监视，第一次即可执行
    },
  },
  methods: {
    // 对echarts初始化
    initChart() {
      this.initChartData();
      if (this.echart) {
        // echart存在
        this.echart.setOption(this.options);
      } else {
        // echart不存在 用初始值
        this.echart = echart.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        // 折线图和柱状图
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        // 饼状图
        this.normalOption.series = this.chartData.series;
      }
    },
  },
  data() {
    return {
      axisOption: {
        // 图例文字颜色
        textStyle: {
          color: "#333",
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [],
      },
      normalOption: {
        trigger: "item",
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      //   echart: null,
    };
  },

  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
</script>

<style lang="scss" scoped></style>

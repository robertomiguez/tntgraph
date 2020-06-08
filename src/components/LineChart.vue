<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    label: {
      type: String,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    chartColors: {
      type: Object,
      required: true
    }
  },
  mounted () {
    const dates = this.chartData.map(d => d.date).reverse()
    const totals = this.chartData.map(d => d.total).reverse()
    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor,
      fill
    } = this.chartColors
    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
            fill: fill
          }
        ]
      },
      this.options
    )
  }
}
</script>

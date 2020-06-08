<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    params: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  mounted () {
    const dataSets = []
    let dates = []
    this.params.forEach(p => {
      dates = p.chartData.map(d => d.date).reverse()
      const totals = p.chartData.map(d => d.total).reverse()
      const label = p.label

      const {
        borderColor,
        pointBorderColor,
        pointBackgroundColor,
        backgroundColor,
        fill
      } = p.chartColors

      dataSets.push(
        {
          label: label,
          data: totals,
          borderColor: borderColor,
          pointBorderColor: pointBorderColor,
          pointBackgroundColor: pointBackgroundColor,
          backgroundColor: backgroundColor,
          fill: fill
        }
      )
    })

    this.renderChart(
      {
        labels: dates,
        datasets: dataSets
      },
      this.options
    )
  }
}
</script>

export const configChart = {
  data () {
    return {
      blueStyleColors: {
        borderColor: `#0309a3`,
        pointBorderColor: `#0309a3`,
        pointBackgroundColor: `#6d71e3`,
        backgroundColor: `#6d71e3`,
        fill: false
      },
      greenStyleColors: {
        borderColor: `#3dd184`,
        pointBorderColor: `#3dd184`,
        pointBackgroundColor: `#2e6649`,
        backgroundColor: `#2e6649`,
        fill: false
      },
      greyStyleColors: {
        borderColor: `#848a87`,
        pointBorderColor: `#848a87`,
        pointBackgroundColor: `#3d403e`,
        backgroundColor: `#3d403e`,
        fill: false
      },
      brownStyleColors: {
        borderColor: `#E06D06`,
        pointBorderColor: `#E06D06`,
        pointBackgroundColor: `#402A2C`,
        backgroundColor: `#402A2C`,
        fill: false
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: true
            }
          }]
        }
      }
    }
  }
}

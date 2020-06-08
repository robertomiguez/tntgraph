<template>
  <div class="container">
    <div class="title">COVID-19 United States</div>
    <div class="graph" v-if="arrAll">
        <lineChartMultipleDatasets
            :params="arrAll"
            :options="chartOptions"
        />
    </div>
    <div class="graph" v-if="positives">
        <lineChart
          :chartData="positives"
          :options="chartOptions"
          :chartColors="blueStyleColors"
          label="Positive"
        />
    </div>

    <div class="footer">
        Data provided by 
        <a href="https://covidtracking.com" 
        target="_blank">covidtracking</a>
        licensed under 
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" 
        target="_blank">CC BY-NC</a> 
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LineChart from '../components/LineChart'
import LineChartMultipleDatasets from '../components/LineChartMultipleDatasets'
import { configChart } from "../mixins/configChart"

export default {
  components: {
    LineChart,
    LineChartMultipleDatasets
  },
  mixins: [configChart],
  data () {
    return {
      arrAll: null
    }
  },
  async mounted () {
    await this.loadCovid()
    this.arrAll = [
      { chartData: this.deaths, 
        chartColors: this.brownStyleColors, 
        label: `Deaths` },
      { chartData: this.hospitalized, 
        chartColors: this.greyStyleColors, 
        label: `Hospitalized` },
      { chartData: this.recovered, 
        chartColors: this.greenStyleColors, 
        label: `Recovered` }
    ]
  },
  computed: mapGetters({
    deaths: `getDeaths`,
    positives: `getPositives`,
    hospitalized: `getHospitalized`,
    recovered: `getRecovered`
  }),
  methods: {
    ...mapActions([
      `loadCovid`
    ])
  }
}
</script>

<style scoped>
.container {
   margin-top: 58px;
}
.graph {
   padding: 15px 50px;
   margin: auto;
   width: 50%;
}
.title {
   font-size: 18px;
   text-align: center;
}
.footer {
   font-size: 15px;
   text-align: center;
}
</style>

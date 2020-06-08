<template>
  <div class='container'>
    <div class="title">In 2017, Brazil had as many homicides as all the bluish countries combined</div>
    <MapChart class='graph'
        :countryData="murderByCountry"
        highColor="#ff0000"
        lowColor="#0D5BD2"
        countryStrokeColor="#909090"
        defaultCountryFillColor="#dadada"
        showLegend=false
    />
    <LegendVertical 
        title='2017 - Annual Homicides'
        :labels='[
          { description: this.murderCountryLeader, color: `#ff0000` },
          { description: this.totalMurderWithoutCountryLeader, color: `#0D5BD2` },
          { description: `No computed`, color: `#c0c0c0` }
        ]'
        :source='{name: `UNODC`, href:`https://dataunodc.un.org/content/data/homicide/homicide-rate` }'
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MapChart from 'vue-map-chart'
import LegendVertical from '../components/LegendVertical'
export default {
  name: `Homicides`,
  components: {
    MapChart,
    LegendVertical
  },
  computed: mapGetters({
    murderByCountry: `getMurderByCountry`,
    murderCountryLeader: `getMurderCountryLeader`,
    totalMurderWithoutCountryLeader: `getTotalMurderWithoutCountryLeader`
  })
}
</script>

<style scoped>
.container {
   margin-top: 80px;
}
.title {
   text-align: center;
   font-size: 20px;
}
.graph {
   padding: 15px 50px;
   margin: auto;
   width: 50%;
}

</style>
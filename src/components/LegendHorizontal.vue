<template>
    <div class='my-legend'>
        <div class='legend-title'>{{title}}</div>
        <div class='legend-scale'>
        <ul class='legend-labels'>
            <li v-for='(label, i) in labels' :key='i'>
               <span :style='{background: label.color}'></span>{{label.description}}
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: `LegendHorizontal`,
  props: {
    title: {
      type: String,
      required: true  
    },  
    labels: {
      type: Array,
      required: true   
    }
  }  

}
</script>

<style scoped>
  .my-legend .legend-title {
    text-align: left;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 90%;
    }
  .my-legend .legend-scale ul {
    margin: 0;
    padding: 0;
    float: left;
    list-style: none;
    }
  .my-legend .legend-scale ul li {
    display: block;
    float: left;
    width: 50px;
    margin-bottom: 6px;
    text-align: center;
    font-size: 80%;
    list-style: none;
    }
  .my-legend ul.legend-labels li span {
    display: block;
    float: left;
    height: 15px;
    width: 50px;
    }
  .my-legend .legend-source {
    font-size: 70%;
    color: #999;
    clear: both;
    }
  .my-legend a {
    color: #777;
    }
</style>

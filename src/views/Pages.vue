<template>
  <div id="main">
    <ul>
      <li v-for="(page, i) in pages" :key="i">
        <Card 
          :title="page.title" 
          :img="page.img" 
          :description="page.description"  
          :to="page.to"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/Card"

export default {
  name: `Pages`,
  components: {
    Card
  },  
  data: function() {
    return {
      pages: []
    }
  },
  mounted: function() {
    this.loadPages()
  },
  methods: {
    loadPages: function () {
      try {
        this.pages = 
        [
          {
            title: `Homicides in Brazil`,
            img: require(`@/assets/homicides.png`),
            description: `This is a scary statistics but sadly a true one`,
            to: `Homicides`            
          },
          {
            title: `Covid 19 - United States`,
            img: require(`@/assets/graph.png`),
            description: `Numbers of Covid 19 in United States`,
            to: `Covid19`            
          },
          {
            title: `Example`,
            img: require(`@/assets/example.png`),
            description: `this is an example...`,
            to: `Pages`            
          },
          {
            title: `Example`,
            img: require(`@/assets/example.png`),
            description: `this is an example...`,
            to: `Pages`            
          },
          {
            title: `Example`,
            img: require(`@/assets/example.png`),
            description: `this is an example...`,
            to: `Pages`            
          },
          {
            title: `Example`,
            img: require(`@/assets/example.png`),
            description: `this is an example...`,
            to: `Pages`            
          },
          {
            title: `Example`,
            img: require(`@/assets/example.png`),
            description: `this is an example...`,
            to: `Pages`            
          }
        ]
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
#main {
  background-color: rgb(224, 223, 223);
  left: 0;
  right: 0;
  position: fixed;
}
h1 {  
    text-align: center; 
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;
}
li {
    width: 350px;
    background: #FFF;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    margin: 5px;
}
</style>

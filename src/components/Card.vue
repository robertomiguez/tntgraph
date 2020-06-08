<template>
    <div>
        <div class=title>{{ title }}</div>
        <img
          :src="img"
          alt=""
          v-if="img"
          width=350
          height=200
        />
        <div class=description>{{ description }}</div>
        <div class=to><Button :to='to' text='Read more'/></div>
    </div>
</template>

<script>
import Button from './Button'
export default {
  name: `Card`,
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }  
}
</script>

<style scoped>
.title {
    font-style: italic;
    font-family: fantasy;
    font-weight: 1000;
    height: 45px;
}
.description {
    height: 130px;
    padding-top: 10px;
    font-style: italic;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.to {
    height: 30px;
    padding-top: 3px;
}

</style>
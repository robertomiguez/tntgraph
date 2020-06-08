import Vuex from 'vuex'
import Vue from 'vue'
import covid19 from './modules/covid19'
import homicides from './modules/homicides'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    covid19,
    homicides
  }
})

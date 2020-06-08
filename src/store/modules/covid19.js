/**
 *
 * store to holds covid state
 *
 */
import axios from 'axios'
import moment from 'moment'

const state = {
  positives: [],
  deaths: [],
  hospitalized: [],
  recovered: []
}

const actions = {
  async loadCovid ({ commit }) {
    try {
      const covid = await axios({
        method: `get`,
        url: `https://covidtracking.com/api/us/daily`
      })
      commit(`SET_COVID`, covid.data)
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  SET_COVID (state, covid) {
    // state.positives = covid.map(c => 
    //   ({ date: moment(c.date, `YYYYMMDD`).format(`MM/DD`), total: c.positive })
    // )
    // state.covidNumbers = covid.map(c => ( 
    //   { 
    //     positive : { date: moment(c.date, `YYYYMMDD`).format(`MM/DD`), total: c.positive }, 
    //     hospitalizedCurrently : 
    //        { date: moment(c.date, `YYYYMMDD`).format(`MM/DD`), total: c.hospitalizedCurrently }, 
    //     recovered : { date: moment(c.date, `YYYYMMDD`).format(`MM/DD`), total: c.recovered }, 
    //     death : { date: moment(c.date, `YYYYMMDD`).format(`MM/DD`), total: c.death } 
    //   }
    // ))
 
    state.positives = [],
    state.deaths = [],
    state.hospitalized = [],
    state.recovered = []
  
    covid.forEach(c => {
      const date = moment(c.date, `YYYYMMDD`).format(`DD/MM`)
      const {
        positive,
        hospitalizedCurrently,
        recovered,
        death
      } = c
      state.positives.push({ date, total: positive })
      state.hospitalized.push({ date, total: hospitalizedCurrently })
      state.recovered.push({ date, total: recovered })
      state.deaths.push({ date, total: death })
    })
  }
}

const getters = {
  getPositives (state) {
    if (state.positives.length) {
      return state.positives
    }
  },
  getHospitalized (state) {
    if (state.hospitalized.length) {
      return state.hospitalized
    }
  },
  getRecovered (state) {
    if (state.recovered.length) {
      return state.recovered
    }
  },
  getDeaths (state) {
    if (state.deaths.length) {
      return state.deaths
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

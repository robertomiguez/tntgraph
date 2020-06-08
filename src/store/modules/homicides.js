/**
 *
 * store to holds violence state
 *
 */

const state = {
  murderByCountry: [
    // numbers of 2017
    { name:`Brazil`, code:`BR`, total: 64652 },     
    { name:`US`, code:`US`, total: 17284 },     
    { name:`Canada`, code:`CA`, total: 660 },
    { name:`Australia`, code:`AU`, total: 203 },
    { name:`Russia`, code:`RU`, total: 13293 },
    { name:`Japan`, code:`JP`, total: 306 },
    { name:`China`, code:`CN`, total: 7990 },
    { name:`Norway`, code:`NO`, total: 28 },
    { name:`Belarus`, code:`BY`, total: 240 },
    { name:`Ukraine`, code:`UA`, total: 2711 },
    { name:`Mongolia`, code:`MN`, total: 191 },
    { name:`Kazakhstan`, code:`KZ`, total: 915 },
    { name:`Argentina`, code:`AR`, total: 2289 },
    { name:`chile`, code:`CL`, total: 779 },
    { name:`Uruguay`, code:`UY`, total: 284 },
    { name:`Paraguay`, code:`PY`, total: 541 },
    { name:`Morroco`, code:`MA`, total: 761 },
    { name:`Kenya`, code:`KE`, total: 2466 },
    { name:`Turkey`, code:`TR`, total: 2503 },
    { name:`Ecuador`, code:`EC`, total: 2390 },
    { name:`Indonesia`, code:`ID`, total: 1150 },
    { name:`New Zealand`, code:`NZ`, total: 35 }
  ]  
}

const getters = {
  getMurderByCountry (state) {
    return  Object.assign(...state.murderByCountry.map(m => ({ [m.code]: m.total })))
  },
  getMurderCountryLeader (state) {
    return Math.max(...state.murderByCountry.map(m => m.total), 0)
  },  
  getTotalMurderWithoutCountryLeader (state) {
    return state.murderByCountry.filter(({ name }) => name !== `Brazil`).reduce( (acc, { total }) => acc + total, 0)
  }

}

export default {
  state,
  getters
}
  
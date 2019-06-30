import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Sokolov Alexander',
      post: 'Frontend developer',
      rating: 4.6,
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    USER: state => {
      return state.user;
    },
  }
})

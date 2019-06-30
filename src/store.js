import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: 'Sokolov Alexander',
            post: 'Frontend developer',
            rating: 4.6,
            id: 1,
        }
    },
    mutations: {
        LOGIN: (state, user) => {
            console.log('sf');
            state.user = user;
        }
    },
    actions: {
        LOGIN: async (context, id) => {

            context.commit('LOGIN',
                (await axios.get(`http://10.20.2.65:8081/user/get?id=${id}`)).data);
        }
    },
    getters: {
        USER: state => {
            return state.user;
        },
    }
})

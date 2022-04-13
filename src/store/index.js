import { createStore } from 'vuex'
export default createStore({
  
  state: () =>({
    lastResult: 0,
    allTasks: 0,
    accuracy: 0,
    trainingDay: 0,
    i_duration: 4,
    settings: {
      duration: 4,
      difficulty: 1,
      operations: [ 'addition', 'division', 'exponentiation', ],
      hint: false,
    },
  }),
  getters: {
  },
  mutations: {
    updateDuration (state, i_duration) {
      this.state.i_duration = i_duration
      this.state.settings.duration = i_duration
    }
  },
  actions: {
  },
  modules: {
  }
})

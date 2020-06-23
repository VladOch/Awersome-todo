import Vue from 'vue'

export default {
   state: {
      tasks: {
         'ID0': {
            label: "Meditations",
            isComplete: false,
            date: "2020/06/22",
            time: "23:36"
         },
         'ID1': {
            label: "Check mail",
            isComplete: true,
            date: "2020/06/21",
            time: "12:36"
         },
         'ID2': {
            label: "End project",
            isComplete: false,
            date: "2020/06/26",
            time: "00:00"
         }
      }
   },
   mutations: {
      updateTask(state, payload){
         Object.assign(state.tasks[payload.id], payload.update)
      },
      deleteTask(state, id) {
         Vue.delete(state.tasks, id)
      }
   },
   actions: {
      updateTask({ commit },payload) {
         commit('updateTask',payload)
      },
      deleteTask({ commit }, id) {
         commit('deleteTask',id)
      }
   },
  
   getters: {
      tasks: (state) => {
         return state.tasks;
      }
   }
}
import Vue from 'vue'


import { uid } from 'quasar'



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
      },
      addTask(state, payload){
         Vue.set(state.tasks, payload.id, payload.task)
      },
      editTask(state, payload){
         Object.assign(state.tasks[payload.id], payload.edit)
      },
   },
   actions: {
      updateTask({ commit },payload) {
         commit('updateTask',payload)
      },
      editTask({commit}, payload) {
         console.log(payload)
         commit('editTask',payload)
      },
      deleteTask({ commit }, id) {
         commit('deleteTask',id)
      },
      addTask({commit}, payload) {
         const TaskId = uid()
          const taskData = {
            id: TaskId,
            task: payload,
          }
         commit('addTask', taskData)
      }
   },
  
   getters: {
      tasks: (state) => {
         return state.tasks;
      }
   }
}
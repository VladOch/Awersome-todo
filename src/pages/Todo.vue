<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md">
      <task
        v-for="(task, key) of tasks"
        :key="key"
        :task="task"
        :keys="key"
        ></task>
      
    </div>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn  
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task 
        @close="showAddTask = false"
      />
    </q-dialog>
     
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import Task from '../components/Task/Task.vue'
import AddTask from '../components/Task/AddTask.vue'

export default {
  data() {
    return {
        showAddTask: false,
    }
  },
  computed: {
     ...mapGetters([
      'tasks',
    ]),
  },
  components: {
    'task': Task,
    'add-task': AddTask,
  }
};
</script>
<style lang="scss">
  .text-line-through{
    text-decoration: line-through;
  }
  .text-line-under {
    text-decoration: underline
  }
</style>
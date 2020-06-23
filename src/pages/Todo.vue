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
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import Task from '../components/Task/Task.vue'
export default {
  computed: {
     ...mapGetters([
      'tasks',
    ]),
  },
  components: {
    'task': Task,
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
<template>
   <q-list 
        bordered
        separator
        >
        <q-item
        @click.prevent="taskchange"
        tag="label"
        clickable
        v-ripple
        :class="task.isComplete ? 'bg-green-3': 'bg-deep-orange-3'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.isComplete" />
        </q-item-section>
        <q-item-section>
          <q-item-label
            :class="{'text-line-through' : task.isComplete}"
            >
              {{ task.label }}
            </q-item-label>
        </q-item-section>
        <q-item-section side v-if="task.date">
          <div class="row">
            <q-icon name="schedule" size="18px" class="q-mr-xs"/>
            <div class="column justify-center" >
            <q-item-label caption>{{ task.date }}</q-item-label>
            <q-item-label caption>{{ task.time }}</q-item-label>
            </div>
          </div>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <q-btn 
              flat 
              round 
              :color="task.isComplete ? 'secondary' : 'red'"
              icon="create" 
              @click.stop="showEditTask = true"
            />
            <q-btn
               :color="task.isComplete ? 'secondary' : 'red'"
               :width="20"
               icon="clear"
               @click.stop="removeTask(keys)"
                  /> 
          </div>
        </q-item-section>
      </q-item>
      <q-dialog v-model="showEditTask">
            <edit-task 
              @hide="showEditTask = false"
              :id="keys"
            />
    </q-dialog>
      </q-list>
       
</template>
<script>
import {mapActions} from 'vuex'
import EditTask from './EditTask.vue'
export default {
   props: ['task','keys'],
   data(){
     return {
       showEditTask: false,
     }
   },
   methods: {
      removeTask(id) {
         this.$q.dialog({
        dark: true,
        title: 'Delete Confirm',
        message: 'Delete Task?',
        cancel: true,
        persistent: true
         }).onOk(() => {
           this.deleteTask(id)
         })
      },
      taskchange() {
        this.updateTask({id: this.keys, update: {isComplete: !this.task.isComplete}})
      },
      ...mapActions([
         'updateTask',
         'deleteTask',
      ]),
      
   },
   components: {
    'edit-task': EditTask
   }
}  
</script>
<style lang="scss">
   
</style>
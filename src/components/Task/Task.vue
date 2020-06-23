<template>
   <q-list 
        bordered
        separator
        >
        <q-item
        @click.prevent="updateTask({id: keys, update: {isComplete: !task.isComplete}})"
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
              {{ task.label }} {{keys}}
            </q-item-label>
        </q-item-section>

        <q-item-section side>
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
               :color="task.isComplete ? 'secondary' : 'red'"
               :width="20"
               icon="clear"
               @click.stop="removeTask(keys)"
                  /> 

          </div>
        </q-item-section>
      </q-item>

      </q-list>
       
</template>
<script>
import {mapActions} from 'vuex'
export default {
   props: ['task','keys'],
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
      ...mapActions([
         'updateTask',
         'deleteTask'
      ]),
      
   },
}  
</script>
<style lang="scss">
   
</style>
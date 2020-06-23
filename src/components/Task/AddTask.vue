<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space></q-space>
      <q-btn v-close-popup flat round color="primary" icon="close" />
    </q-card-section>
    <form @submit.prevent="submitFormMethod">
<div class="row q-mb-sm">
      <q-card-section class="q-pt-none">
        <q-input
          v-model="TaskToSubmit.label"
          label="Name of Task"
          width="350px"
          outlined
          class="col"
          :rules="[val => !!val || 'Field is required']"
          ref="name"
          autofocus
        />
      </q-card-section>
    </div>
        <div class="row q-mb-sm">
      <div class="q-pa-md" style="max-width: 500px">
        <q-input
          filled
          v-model="TaskToSubmit.date"
          mask="date"
          label="Date"
          :rules="['date']"
          outlined
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="TaskToSubmit.date" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
      <div class="row q-mb-sm">
      <div class="q-pa-md">
        <div class="q-gutter-sm row">
          <q-input
            filled
            v-model="TaskToSubmit.time"
            mask="time"
            label="Time"
            :rules="['time']"
            outlined
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="TaskToSubmit.time" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <q-card-actions align="right">
      <q-btn  
      label="SAVE" 
      color="primary" 
      type="submit"
      
      />
    </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      TaskToSubmit: {
        label: "",
        date: "",
        time: "",
        isComplete: false
      }
    };
  },
  methods: {
     ...mapActions(['addTask']),
    submitFormMethod() {
      this.$refs.name.validate()
      if(!this.$refs.name.hasError) {
        this.addTask(this.TaskToSubmit)
        this.$emit('close')
      }
      this.$emit('close')
    },
    
  }
};
</script>

<style lang="scss"></style>

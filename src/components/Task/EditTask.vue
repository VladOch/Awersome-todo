<template>
  <q-card>
    <task-title>Edit task</task-title>

    <form @submit.prevent="submitFormMethod">
          <name-input
            :name.sync="TaskToSubmit.label"
            ref="modalName"
          ></name-input>

          <name-date-input
            :date.sync="TaskToSubmit.date"
          ></name-date-input>
           <name-time-input
            v-if="TaskToSubmit.date"
            :time.sync="TaskToSubmit.time"
          ></name-time-input>
          <submit-button ></submit-button>
          
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import ModalTaskTitle from "components/Shared/ModalTaskTitle.vue";
import ModalTextInput from "components/Shared/ModalTextInput.vue";
import ModalDateInput from "components/Shared/ModalDateInput.vue";
import ModalTimeInput from "components/Shared/ModalTimeInput.vue";
import ButtonSubmit from "components/Shared/ButtonSubmit.vue";

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
  props: ['id'],
  methods: {
    ...mapActions(["editTask"]),
    submitFormMethod() {
      this.$refs.modalName.$refs.name.validate();
      if (!this.$refs.modalName.$refs.name.hasError) {
        this.editTask({id: this.id, edit: this.TaskToSubmit});
        this.$emit("hide");
      }
    },
  },
  components: {
    "task-title": ModalTaskTitle,
    "name-input" : ModalTextInput,
    "name-date-input" : ModalDateInput,
    "name-time-input" : ModalTimeInput,
    "submit-button": ButtonSubmit,
  }
};
</script>

<style lang="scss"></style>

<template>
  <div class="col q-mb-sm">
    <div class="q-pa-md" style="max-width: 500px">
      <q-input
        filled
        :value="date"
        mask="date"
        label="Date"
        :rules="['date']"
        outlined
        @input="$emit('update:date', $event)"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date :value="date" 
                @input="$emit('update:date', $event)"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click="clearInput"
            v-if="date"
            class="cursor-pointer"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>
<script>
export default {
  props: ["date"],
  methods: {
    clearInput() {
      this.date=''
    }
  },
};
</script>
<style></style>

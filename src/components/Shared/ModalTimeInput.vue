<template>
  <div class="row q-mb-sm" >
    <div class="col q-pa-md">
      <div class="q-gutter-sm col">
        <q-input
          filled
          :value="time"
          mask="time"
          label="Time"
          :rules="['time']"
          outlined
          @input="$emit('update:time', $event)"
        >
          <template v-slot:append>
            <q-icon
              name="close"
              @click="time = ''"
              v-if="time"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time :value="time" 
                @input="$emit('update:time', $event)"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["time"]
};
</script>
<style></style>

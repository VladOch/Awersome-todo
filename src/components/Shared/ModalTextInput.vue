<template>
  <div class="q-mb-sm col">
    <q-card-section class="q-pt-none">
      <q-input
        :value="name"
        label="Name of Task"
        width="350px"
        outlined
        class="col"
        :rules="[val => !!val || 'Field is required']"
        ref="name"
        @input="$emit('update:name', $event)"
        autofocus
        ><template v-slot:append>
          <q-icon
            name="close"
            @click="$emit('update:name', '')"
            v-if="name"
            class="cursor-pointer"
          />
        </template>
      </q-input>
    </q-card-section>
  </div>
</template>
<script>
export default {
  props: ["name"],
  methods: {}
};
</script>
<style></style>

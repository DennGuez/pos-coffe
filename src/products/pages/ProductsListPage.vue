<template>
  <div class="q-pa-sm">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 30"
        :key="index"
        class="example-item"
      >
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
.example-item
  height: 250px
  width: 250px
</style>
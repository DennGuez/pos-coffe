<template>
<div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1200px">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-secondary text-primary"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
        <q-tab name="photos" icon="photo" label="Photos" />
        <q-tab name="videos" icon="slow_motion_video" label="Videos" />
        <q-tab name="addressbook" icon="people" label="Address Book" />
      </q-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('mails')

</script>

<style scoped>

</style>
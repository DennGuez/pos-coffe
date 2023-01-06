<template>
 <q-page-sticky expand position="top" class="bg-secondary">
    <div class="row justify-center q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 900px">
          <q-tabs
            indicator-color="transparent"
            active-class="tab-rounded"
            active-bg-color="primary"
            active-color="white"
            shrink
            v-model="tab"
            inline-label
            outside-arrows
            mobile-arrows
            class="bg-secondary text-primary"
          >
            <q-tab name="mails" icon="mail" label="Mails" />
            <q-separator vertical inset spaced="md" />
            <q-tab name="alarms" icon="alarm" label="Alarms" />
            <q-separator vertical inset spaced="md" />
            <q-tab name="movies" icon="movie" label="Movies" />
            <q-separator vertical inset spaced="md" />
            <q-tab name="photos" icon="photo" label="Photos" />
            <q-separator vertical inset spaced="md" />
            <q-tab name="videos" icon="slow_motion_video" label="Videos" />
            <q-separator vertical inset spaced="md" />
            <q-tab name="addressbook" icon="people" label="Address Book" />
          </q-tabs>
        </div>
      </div>
 </q-page-sticky>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('mails')

</script>

<style lang="sass" scoped>
.tab-rounded
  border-radius: 5px

</style>
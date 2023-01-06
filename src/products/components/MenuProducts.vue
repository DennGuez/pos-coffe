<template>
 <q-page-sticky expand position="top" class="bg-secondary justify-center q-pa-md">
          <q-tabs
            breakpoint="600"
            indicator-color="transparent"
            active-class="tab-rounded"
            active-bg-color="primary"
            active-color="white"
            v-model="tab"
            inline-label
            class="bg-secondary text-primary col"
          >
            <q-tab name="mails" icon="mail" label="Mails" />
            <q-separator vertical inset spaced="md" color="secondary" />
            <q-tab name="alarms" icon="alarm" label="Alarms" />
            <q-separator vertical inset spaced="md" color="secondary" />
            <q-tab name="movies" icon="movie" label="Movies" />
            <q-separator vertical inset spaced="md" color="secondary" />
            <q-tab name="photos" icon="photo" label="Photos" />
            <q-separator vertical inset spaced="md" color="secondary" />
            <q-tab name="videos" icon="slow_motion_video" label="Videos" />
            <q-separator vertical inset spaced="md" color="secondary" />
            <q-tab name="addressbook" icon="people" label="Address Book" />
          </q-tabs>
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
<template>
  <q-layout view="lHr LpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Products
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <OrdersDetailsPage :isOpen="rightDrawerOpen"/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import OrdersDetailsPage from 'src/orders/pages/OrdersDetailsPage.vue'
import { ref } from 'vue'

export default {
    setup() {
        const leftDrawerOpen = ref(false);
        const rightDrawerOpen = ref(false);
        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
            rightDrawerOpen,
            toggleRightDrawer() {
                rightDrawerOpen.value = !rightDrawerOpen.value;
            }
        };
    },
    components: { OrdersDetailsPage }
}
</script>
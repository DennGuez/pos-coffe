<template>
  <q-layout view="lHr LpR fFf">

    <q-header class="bg-secondary text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-bold">
          Products
        </q-toolbar-title>

        <div class="" style="width: 500px">
          <q-input
            class="on-left"
            type="search"
            item-aligned
            filled
            v-model="text"
            label="Buscar Producto"
            dense
            bg-color="white">
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
              </template>
          </q-input>
        </div>

        <q-btn dense flat round icon="shopping_cart" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <OrdersDetailsPage :isOpen="rightDrawerOpen"/>

    <q-page-container class="bg-secondary" >
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
<template>
  <q-layout view="lHr LpR fFf">

    <q-header class="bg-secondary text-primary">
    <!-- <div class="row"> -->
      <q-toolbar class="row">
        <div class="row col items-center q-pr-md">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          <q-toolbar-title class="text-bold" >
            Products
          </q-toolbar-title>
        </div>
        <div class="col-6">
          <div style="width: 100%;">
              <q-input
                type="search"
                filled
                v-model="text"
                label="Buscar Producto"
                dense
                bg-color="white">
                  <template v-slot:append>
                    <q-btn
                      style="width: 90px;"
                      no-caps=""
                      :loading="false"
                      size="md"
                      dense
                      color="primary"
                      label="Buscar"
                      @click="onClick" />
                  </template>
              </q-input>
          </div>
        </div>
        <div class="q-pl-md col row justify-end">
          <q-btn dense flat round icon="shopping_cart" @click="toggleRightDrawer" />
        </div>
      </q-toolbar>
    <!-- </div> -->
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
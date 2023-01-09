<template>
    <div class="q-pa-md">
      <q-layout view="lHr LpR fFf" container style="height: 500px" class="shadow-2 rounded-borders">
        <q-header reveal class="bg-black">
          <q-toolbar>
            <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
            <q-toolbar-title>Header</q-toolbar-title>
            <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
          </q-toolbar>
        </q-header>
  
        <q-drawer
          v-model="drawerLeft"
          :width="200"
          :breakpoint="700"
          bordered
          class="bg-grey-3"
        >
          <q-scroll-area class="fit">
            <div class="q-pa-sm">
              <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
            </div>
          </q-scroll-area>
        </q-drawer>
  
        <q-drawer
          side="right"
          v-model="drawerRight"
          bordered
          :width="200"
          :breakpoint="500"
          class="bg-grey-3"
        >
        <template>
        <q-item class="absolute-top no-padding" style="height: 56px">
            <q-toolbar class="bg-secondary text-black fit">
                <q-toolbar-title class="text-bold">Detalles de compra</q-toolbar-title>
            </q-toolbar>
        </q-item>

        <!-- 56 + 220 = 276 -->
        <q-scroll-area style="height: calc(100% - 276px); margin-top: 56px; margin-bottom: 210px;" >
            <q-list separator> 
                <OrderCard />
            </q-list>
        </q-scroll-area>

        <q-item class="absolute-bottom column q-py-md" style="height: 220px">
            <div class="row justify-between">
                <span class="text-subtitle1 text-grey-7" >Subtotal</span>
                <span class="text-subtitle1  text-primary text-bold" >Bs 742.00</span>
            </div>
            <div class="row justify-between">
                <span class="text-subtitle1 text-grey-7" >Descuento</span>
                <span class="text-subtitle1  text-primary text-bold" >- Bs 4.00</span>
            </div>
            <q-separator spaced="lg" />
            <div class="row justify-between">
                <span class="text-h6 text-grey-7 text-bold" >Total</span>
                <span class="text-h6 text-primary text-bold" >Bs 383.00</span>
            </div>
            <q-separator spaced inset vertical dark />
            <q-btn size="lg" color="primary" label="Pagar Ahora" />
        </q-item>
    </template>
        </q-drawer>
  
        <q-page-container>
          <q-page class="q-pa-md">
            <p v-for="n in 15" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
            </p>
  
            <q-page-sticky position="top-left" :offset="[18, 18]">
              <q-btn round color="primary" icon="arrow_back" class="rotate-45" />
            </q-page-sticky>
            <q-page-sticky position="top-right" :offset="[18, 18]">
              <q-btn round color="primary" icon="arrow_upward" class="rotate-45" />
            </q-page-sticky>
            <q-page-sticky position="bottom-left" :offset="[18, 18]">
              <q-btn round color="primary" icon="arrow_forward" class="rotate-135" />
            </q-page-sticky>
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
              <q-btn round color="primary" icon="arrow_forward" class="rotate-45" />
            </q-page-sticky>
          </q-page>
  
          <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>
        </q-page-container>
      </q-layout>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import OrderCard from './textLayut.vue';
  
  export default {
    setup () {

      components: {
        OrderCard
      }

      return {
        drawerLeft: ref(false),
        drawerRight: ref(true)
      }
    }
  }
  </script>
  
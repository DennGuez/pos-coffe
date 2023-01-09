<template>
<q-drawer
    :width="340"
    v-model="isOpen"
    side="right"
    bordered
>   
    <template v-if="orders.length === 0">
      <div class="column justify-center items-center full-height"> 
         <q-icon name="shopping_cart" size="100px" color="secondary"/>
         <span class="text-subtitle1"> No hay ningun producto en el carro.</span>
      </div>
    </template>

    <template v-else>
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
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import OrderCard from 'src/orders/components/OrderCard.vue'
import useOrders from '../composables/useOrders'

const props = defineProps<{ isOpen: boolean }>()
const isOpen = toRef(props, 'isOpen')

const { orders } = useOrders()
console.log( orders )
</script>

<style lang="sass" scoped>
.red
    background: red
    color: white
.green
    background: green
    color: white
</style>
<template>
<q-drawer
    class="q-py-sm"
    :width="340"
    show-if-above
    v-model="isOpen"
    side="right"
    bordered
>
    <span class="text-h6 text-bold q-px-md">Detalles de compra</span>
    <q-separator class="q-my-sm"/>
    <q-scroll-area style="height: 70%; max-width: 100%;">
        <q-list separator> 
        <q-item v-for="val in 20" :key="val" clickable v-ripple>
            <q-item-section avatar>
                <q-avatar size="70px" rounded>
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">
                </q-avatar>
            </q-item-section>

            <q-item-section>
            <q-item-label class="text-weight-bold">Caffé Napolitano</q-item-label>
            <q-separator spaced inset vertical dark />
            <div class="row justify-between">
                    <span class="text-body2 text-grey-7" >2x</span>
                    <span class="text-subtitle2 text-primary text-bold" >Bs 23.00</span>
            </div>
            </q-item-section>
        </q-item>
        </q-list>
    </q-scroll-area>
    
    <div class="column fixed-bottom q-pa-md">
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
            <span class="text-h6 text-primary text-bold" >Bs 740.00</span>
        </div>
        <q-separator spaced inset vertical dark />
        <q-btn color="primary" label="Pagar Ahora" />
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{isOpen: boolean}>()
const isOpen = toRef(props, 'isOpen')

</script>

<style scoped>

</style>
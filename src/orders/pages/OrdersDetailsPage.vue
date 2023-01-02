<template>
<q-drawer
    :width="340"
    show-if-above
    v-model="isOpen"
    side="right"
    bordered
>

    <q-item class="red absolute-top no-padding" style="height: 56px">
        <q-toolbar class="bg-secondary text-black fit">
            <q-toolbar-title class="text-bold">Detalles de compra</q-toolbar-title>
        </q-toolbar>
    </q-item>

    <!-- 56 + 210 = 256 -->
    <q-scroll-area style="height: calc(100% - 266px); margin-top: 56px; margin-bottom: 210px;" >
        <q-list separator> 
            <q-item v-for="val in 20" :key="val" clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar size="70px" rounded>
                        <img src="https://cdn.quasar.dev/img/mountains.jpg">
                    </q-avatar>
                </q-item-section>

                <q-item-sectionm>
                <q-item-label class="text-weight-bold">Caffé Napolitano</q-item-label>
                <div class="row justify-between">
                        <span class="text-body2 text-grey-7" >2x</span>
                        <span class="text-subtitle2 text-primary text-bold" >Bs 23.00</span>
                </div>
                </q-item-sectionm>
            </q-item>
        </q-list>
    </q-scroll-area>

    <q-item class="absolute-bottom column" style="height: 210px">
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
        <q-btn size="lg" color="primary" label="Pagar Ahora" />
    </q-item>
  </q-drawer>
</template>

<script setup lang="ts">
import { toRef } from 'vue'

const props = defineProps<{isOpen: boolean}>()
const isOpen = toRef(props, 'isOpen')

</script>

<style lang="sass" scoped>
.red
    background: red
    color: white
.green
    background: green
    color: white
</style>
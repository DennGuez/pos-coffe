<template>
    <q-card
      @click="addProductToCar( product )"
      flat
      class="q-ma-sm my-card cursor-pointer">
        <img v-if="!product.image" src="src/assets/default-store-350x350.jpg" alt="default-image">
        <img v-else :src="product.image" :alt="product.name">

        <q-card-section>
        <div class="text-subtitle1 text-bold">{{ product.name }}</div>
        <div class="text-h6 text-bold text-primary">Bs. {{ product.price }}.00</div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Product } from 'src/products/interfaces/Product'
import useOrders from 'src/orders/composables/useOrders'

const props = defineProps<{ product: Product }>()
const product = toRef(props, 'product')

const { addProductToCar } = useOrders()

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  border: 10px solid white
</style>
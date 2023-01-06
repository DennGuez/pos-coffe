<template>
    <q-card flat class="q-ma-sm my-card">
        <img v-if="!product.image" src="src/assets/default-store-350x350.jpg" alt="default-image">
        <img v-else :src="product.image" :alt="product.name">

        <q-card-section>
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-subtitle2">{{ product.price }}</div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Product } from 'src/products/interfaces/Product'

const props = defineProps<{ product: Product }>()
const product = toRef(props, 'product')
</script>
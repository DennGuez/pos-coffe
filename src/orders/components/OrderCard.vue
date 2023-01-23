<template>
    <q-item>
        <q-item-section avatar>
            <q-avatar size="70px" rounded>
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-avatar>
        </q-item-section>

        <q-item-section class="column justify-around">
            <q-item-label class="text-weight-bold">{{ product.name }}</q-item-label>
            <div class="row justify-between">
                <span class="text-body2 text-grey-7">{{ product.qtyCar }}x</span>
                <div class="row justify-around" style="width: 90px">
                    <q-btn v-if="product.qtyCar! <= 1" color="red" dense icon="close" size="sm" @click="removeProductFromCar( product.id! )"/>
                    <q-btn v-else color="primary" dense icon="remove" size="sm" @click="removeProductFromCar( product.id! )"/>
                    <q-btn color="primary" dense icon="add" size="sm" @click="increaseProductFromCar( product.id! )"/>
                </div>
                <span class="text-subtitle2 text-primary text-bold" >Bs {{ product.price }}</span>
            </div>
        </q-item-section>
    </q-item>
</template>

<script setup lang="ts">
import useOrders from '../composables/useOrders'
import { Product } from 'src/products/interfaces/Product'

const { increaseProductFromCar, removeProductFromCar } = useOrders()

defineProps<{
    product: Product
}>()

</script>

<style scoped>

</style>
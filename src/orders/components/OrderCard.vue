<template>
    <q-item
      @click="removeProductFromCar( product )"
      v-for="product in orders"
      :key="product.id"
      clickable
      v-ripple>
        <q-item-section avatar>
            <q-avatar size="70px" rounded>
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-avatar>
        </q-item-section>

        <q-item-section class="column justify-around">
            <q-item-label class="text-weight-bold">{{ product.name }}</q-item-label>
            <div class="row justify-between">
                <span class="text-body2 text-grey-7">2x</span>
                <q-btn color="primary" dense icon="add" size="sm" @click="increaseProductFromCar( product )"/>
                <span class="text-subtitle2 text-primary text-bold" >Bs {{ product.price }}</span>
            </div>
        </q-item-section>
    </q-item>
</template>

<script setup lang="ts">
import useOrders from '../composables/useOrders';

const { orders, removeProductFromCar, increaseProductFromCar } = useOrders()

</script>

<style scoped>

</style>
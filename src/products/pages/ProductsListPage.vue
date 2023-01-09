<template>
  <q-page padding style="padding-top: 70px">
    <div class="row justify-center">
      <q-intersection
        v-for="product in productsQuery.data.value"
        :key="product.id"
      >
        <ProductCard :product="product"/>
      </q-intersection>
    </div>
    <MenuProducts />
  </q-page>
</template>

<script setup lang="ts">
import MenuProducts from '../components/MenuProducts.vue'
import useProducts from 'src/products/composables/useProducts'
import ProductCard from 'src/products/components/ProductCard.vue'

const { productsQuery } = useProducts()


</script>

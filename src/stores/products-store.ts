import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Product } from 'src/products/interfaces/Product'

export const useProductsStore = defineStore('products', () => {

   const products = ref<Product[]>([])

   return {
       //State
       products,

       //Getters
        // squareCount: computed( () => count.value * count.value )

       //Actions
       setProducts( data: Product[] ) {
        products.value = data
       },
   }
})
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Product } from 'src/products/interfaces/Product'

export const useOrdersStore = defineStore('orders', () => {

   const orders = ref<Product[]>( [] )
   const totalPrice = ref<number>(0)
   
   return {
       //State
        orders,
        totalPrice,

       //Getters
        // getTotalPrice: computed( () => totalPrice.value = orders.value.reduce((total, item) => {
        //     return total + item.price
        // },0 ) ),

       //Actions
        addOrder( orderCar: Product ) {
            orders.value.push( orderCar )
            totalPrice.value = totalPrice.value + orderCar.price
        },

        removeOrder( orderCar: Product ) {
            const filtered = orders.value.filter( order => order.id !== orderCar.id  )
            orders.value = [...filtered ]
        },

        increaseOrder( orderCar: Product ) {
            const orderIncrease = orders.value.find( order => order.id == orderCar.id )
            console.log( orderIncrease )
            
        }
   }
})

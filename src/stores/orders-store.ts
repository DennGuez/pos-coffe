import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Product } from 'src/products/interfaces/Product'

export const useOrdersStore = defineStore('orders', () => {

   const orders = ref<Product[]>( [])
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

            const existOrder = orders.value.some(order => order.id == orderCar.id)
            
            if(!existOrder) {
                const addQty = { qtyCar: 1, ...orderCar }
                orders.value.push( addQty )
            }
        },

        removeOrder( id: string ) {
            // TODO hacer un if si el qtyCar es < 1 eliminar producto
            const order = orders.value.find(order => order.id === id)
            
            if ( order ) {
                
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                if( order!.qtyCar! <= 1) {
                    orders.value = orders.value.filter( order => order.id !== id )
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    order.qtyCar! -= 1
                }
            }



        },

        increaseOrder( id: string ) {

            const order = orders.value.find(order => order.id === id)

            if(order) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                order.qtyCar! += 1
            }
        }
    }
})

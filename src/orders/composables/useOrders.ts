import { storeToRefs } from 'pinia'
import { useOrdersStore } from 'src/stores/orders-store'
import { Product } from 'src/products/interfaces/Product'

const useOrders = () => {

   const orderStore = useOrdersStore()
   const { orders } = storeToRefs(orderStore)

   return{

      // Properties
      orders,
      
      // Methods
      addProductToCar( product: Product ) {
         orderStore.addOrder( product )
      }, 
      removeProductFromCar( product: Product ) {
         orderStore.removeOrder( product )
      },
      increaseProductFromCar( product: Product ) {
         orderStore.increaseOrder( product )
      }

      // computed
   }
}

export default useOrders
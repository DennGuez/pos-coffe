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
      removeProductFromCar( id: string ) {
         orderStore.removeOrder( id )
      },
      increaseProductFromCar( id: string ) {
         orderStore.increaseOrder( id )
      }

      // computed
   }
}

export default useOrders
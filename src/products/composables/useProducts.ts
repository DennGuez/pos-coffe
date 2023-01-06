import { useQuery } from '@tanstack/vue-query'
import { Product } from './../interfaces/Product';
import supabaseApi from 'src/api/supabaseApi'
import { useProductsStore } from 'src/stores/products-store';

const getProducts = async():Promise<Product[]> => {

    const params = new URLSearchParams()
    params.append('select', '*')

    const { data } = await supabaseApi.get<Product[]>('/products', { params })

    const productsStore = useProductsStore()

    productsStore.setProducts( data )

    const products = [...productsStore.products]
    
    return products

}

const useProducts = () => {



    const productsQuery = useQuery(
        ['products'],
        getProducts
    )

   return{
        productsQuery
   }
}

export default useProducts
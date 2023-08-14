
import { useEffect } from 'react'

import ActuallyOrder from './ActuallyOrder'
import ProductsList from './ProductsList'

import styles from './ProductsScreen.module.css'
import { useOrderContext } from '../hooks/useOrderContext'


const ProductsScreen = () => {

    const {
      order,
      setOrder,
      orderInProcess,
      setOrderInProcess,
    } = useOrderContext()

    useEffect(() => {
        if (!orderInProcess) setOrder([])
    }, [orderInProcess])

    const addProductToOrder = (product) => {
        const newOrderProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }

        if (orderInProcess) {
            let updatedOrderProduct = false
            const newOrder = order.map(orderProduct => {
                if (orderProduct.id == product.id) {
                    orderProduct.quantity += 1
                    updatedOrderProduct = true
                }
                return orderProduct 
            })

            if (!updatedOrderProduct) newOrder.push(newOrderProduct)
            setOrder(newOrder)
            
        } else {
            setOrder([newOrderProduct])
            setOrderInProcess(true)
        }
    }
    

    return (
        <section className={styles.screen}>
            <ProductsList 
                addProductToOrder={addProductToOrder}
            />
            <ActuallyOrder />
        </section>
    )
}

export default ProductsScreen
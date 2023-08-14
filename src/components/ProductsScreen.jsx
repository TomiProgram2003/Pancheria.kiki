
import { useState } from 'react'

import ActuallyOrder from './ActuallyOrder'
import ProductsList from './ProductsList'

import styles from './ProductsScreen.module.css'


const ProductsScreen = () => {

    const [order, setOrder] = useState(false)

    const addProductToOrder = (product) => {
        const newOrderProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        }

        if (order) {
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
            
        } else setOrder([newOrderProduct])
    }
    

    return (
        <section className={styles.screen}>
            <ProductsList 
                addProductToOrder={addProductToOrder}
            />
            <ActuallyOrder 
                order={order}
                setOrder={setOrder}
            />
        </section>
    )
}

export default ProductsScreen
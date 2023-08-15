
import ActuallyOrder from './ActuallyOrder'
import ProductsList from './ProductsList'

import styles from './ProductsScreen.module.css'


const ProductsScreen = () => {

    return (
        <section className={styles.screen}>
            <ProductsList />
            <ActuallyOrder />
        </section>
    )
}

export default ProductsScreen
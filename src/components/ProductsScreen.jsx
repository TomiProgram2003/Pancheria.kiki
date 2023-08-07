
import ActuallyOrder from './ActuallyOrder'
import ProductsList from './ProductsList'
import styles from './ProductsScreen.module.css'

const ProductsScreen = () => {
    return (
        <div className={styles.screen}>
            <ProductsList />
            <ActuallyOrder />
        </div>
    )
}

export default ProductsScreen
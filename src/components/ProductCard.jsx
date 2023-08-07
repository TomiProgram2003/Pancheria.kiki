
import styles from './ProductCard.module.css'

const ProductCard = () => {

  const product = {    
    name: 'Pancho',
    price: 300,
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {product.name}
      </h2>
      <div className={styles.image}></div>
      <h3 className={styles.price}>
        ${product.price}
      </h3>
    </div>
  )
}

export default ProductCard
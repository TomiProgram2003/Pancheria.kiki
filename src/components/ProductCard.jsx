
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {

  const getImageUrl = (imagePath) => {
    return new URL(imagePath, import.meta.url).href
  }

  return (
    <li className={styles.card}>
      <h2 className={styles.title}>
        {product.name}
      </h2>
      <img
        className={styles.image}
        src={getImageUrl(product.image)}
      ></img>
      <h3 className={styles.price}>
        ${product.price}
      </h3>
    </li>
  )
}

export default ProductCard
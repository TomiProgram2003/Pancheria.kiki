
import styles from './ProductCard.module.css'

const ProductCard = ({ product, addProductToOrder }) => {

  const getImageUrl = (imagePath) => {
    return new URL(imagePath, import.meta.url).href
  }

  const handleClick = () => {
    addProductToOrder(product)
  }

  return (
    <li
      className={styles.card}
      onClick={handleClick}
    >
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
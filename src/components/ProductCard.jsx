
import styles from './ProductCard.module.css'
import { useAppContext } from '../hooks/useAppContext'
import { addProduct } from '../controllers/ordersController'

const ProductCard = ({ product }) => {

  const { order, setOrder } = useAppContext()

  const getImageUrl = (imagePath) => {
    return new URL(imagePath, import.meta.url).href
  }

  const handleClick = () => {
    setOrder(addProduct(product, order))
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
      />
      <h3 className={styles.price}>
        ${product.price}
      </h3>
    </li>
  )
}

export default ProductCard
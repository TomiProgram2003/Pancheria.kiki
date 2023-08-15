
import styles from './ActuallyOrder.module.css'
import { useAppContext } from '../hooks/useAppContext'
import { addSale } from '../controllers/salesController'

const ActuallyOrder = () => {
  
  const {
    order,
    setOrder,
    setSales,
  } = useAppContext()


  const cancelOrder = () => {
    console.log('CANCEL order')
    setOrder([])
  }

  const confirmOrder = () => {
    console.log('CONFIRM order')
    setSales(addSale(order))
    setOrder([])
  }

  return (
    <article className={`${styles.order} ${order.length ? styles.active : null}`}>
      <ul className={styles.list}>
        {
          order.length ? (
            order.map(orderProduct => (
              <li key={orderProduct.id}>
                <span className={styles.productName}>{orderProduct.name}</span>
                <span className={styles.productPrice}>(${orderProduct.price})</span>
                <span className={styles.productQuantity}><b>X</b>{orderProduct.quantity}</span>
                <span className={styles.subtotal}>subtotal: ${orderProduct.price * orderProduct.quantity}</span>
              </li>
            ))
          ) : null
        }
        <li>
          TOTAL: {
            order.length && order
              .map(product => product.price * product.quantity)
              .reduce((accumulator, currentValue) => accumulator + currentValue)
            }
        </li>
      </ul>

      <button
        className={styles.cancelButton}
        onClick={cancelOrder}
      > CANCEL </button>
      <button
        className={styles.confirmButton}
        onClick={confirmOrder}
      > CONFIRM </button>
    </article>
  )
}

export default ActuallyOrder
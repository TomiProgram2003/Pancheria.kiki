
import { useEffect, useReducer, useState } from 'react'
import styles from './ActuallyOrder.module.css'

const ActuallyOrder = ({ order, setOrder }) => {
  
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (order) {
      const total = order
        .map(product => product.price * product.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      setTotalPrice(total)

    } else setTotalPrice(0)
  }, [order])

  const cancelOrder = () => {
    console.log('CANCEL order')
    setOrder(false)
  }

  const confirmOrder = () => {
    console.log('CONFIRM order')
    
  }

  return (
    <article className={`${styles.order} ${order ? styles.active : null}`}>
      <ul className={styles.list}>
        {
          order ? (
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
        <li>TOTAL: {totalPrice}</li>
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
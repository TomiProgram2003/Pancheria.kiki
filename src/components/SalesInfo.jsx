
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import styles from './SalesInfo.module.css'
import { getSalesLS } from '../controllers/salesController'
import ProductInfo from './ProductInfo'

const SalesInfo = () => {

  const [orderData, setOrderData] = useState(null)

  const {
    saleInfoID,
    setSaleInfoID
  } = useAppContext()

  useEffect(() => {
    if (saleInfoID)  {
      const sales = getSalesLS()
      const sale = sales ? sales.filter(s => s.id == saleInfoID) : null
      const order = sale ? sale[0].order : null
      setOrderData(order)
    } else setOrderData(null)
  }, [saleInfoID])

  return (
    <aside className={styles.salesInfo}>
      <button onClick={() => setSaleInfoID(null)}>
        X
      </button>
      <div className={styles.container}>
        {
          orderData ? (
            orderData.map((product, i) => (
              <ProductInfo key={i} product={product} />
            ))
          ) : null
        }
      </div>
    </aside>
  )
}

export default SalesInfo
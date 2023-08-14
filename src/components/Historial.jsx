
import { useOrderContext } from '../hooks/useOrderContext'
import styles from './Historial.module.css'
import SaleItem from './SaleItem'

const Historial = () => {

  const { sales } = useOrderContext()
  console.log(sales)


  return (
    <div className={styles.historial}>
      <span className={styles.title}>Historial</span>
      <div className={styles.container}>
        {
          sales.length > 0 ? (
            sales.map((sale, index) => (    
              <SaleItem
                key={index}
                index={index}
                sale={sale}
              />
            ))
          ) : null
            
        }
      </div>
    </div>
  )
}

export default Historial
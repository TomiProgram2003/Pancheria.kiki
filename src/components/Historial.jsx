
import { useAppContext } from '../hooks/useAppContext'
import styles from './Historial.module.css'
import SaleItem from './SaleItem'

const Historial = () => {

  const { sales } = useAppContext()

  return (
    <div className={styles.historial}>
      <span className={styles.title}>Historial</span>
      <div className={styles.container}>
        {
          sales.length > 0 ? (
            sales.map((sale, index) => (    
              <SaleItem
                key={sale.id}
                index={index+1}
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
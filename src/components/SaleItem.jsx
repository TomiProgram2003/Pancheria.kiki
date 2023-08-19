
import { useAppContext } from '../hooks/useAppContext'
import styles from './SaleItem.module.css'

const SaleItem = ({ sale, index }) => {

  const { setSaleInfoID } = useAppContext()

  const money = sale.order
    .map(product => product.price * product.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue)

    const handleClick = () => {
      setSaleInfoID(sale.id)
      console.log('click')
    }

  return (
    <p
      className={styles.sale}
      onClick={handleClick}  
    >
      <span className={styles.num}> Venta #{ index } </span>
      <span className={styles.money}> ${ money } </span>
    </p>
  )
}

export default SaleItem
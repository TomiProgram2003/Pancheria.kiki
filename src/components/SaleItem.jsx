
import styles from './SaleItem.module.css'

const SaleItem = ({ index, sale }) => {

  const money = sale
    .map(product => product.price * product.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue)

  return (
    <p className={styles.sale}>
      <span className={styles.num}> Venta #{ index } </span>
      <span className={styles.money}> ${ money } </span>
    </p>
  )
}

export default SaleItem
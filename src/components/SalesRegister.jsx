
import CashRegister from './CashRegister'
import Historial from './Historial'
import styles from './SalesRegister.module.css'

const SalesRegister = () => {

    return (
        <aside className={styles.salesRegister}>
            <Historial />
            <CashRegister />
        </aside>
    )
}

export default SalesRegister
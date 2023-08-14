
import styles from './CashRegister.module.css'

const CashRegister = () => {
    return (
        <div className={styles.cashRegister}>
            <p className={styles.text}>
                Total en caja: <span className={styles.cash}>${0}</span>
            </p>
        </div>
    )
}

export default CashRegister
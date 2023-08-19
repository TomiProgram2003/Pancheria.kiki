
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import styles from './CashRegister.module.css'

const CashRegister = () => {

    const { sales } = useAppContext()

    const [salesMoney, setSalesMoney] = useState(0)

    useEffect(() => {
        if (sales.length) {
            let accum = 0
            sales.forEach(sale => {
                sale.order.forEach(product => {
                    accum += product.price * product.quantity
                })
            })
            setSalesMoney(accum)
        }
        
    }, [sales])

    return (
        <div className={styles.cashRegister}>
            <p className={styles.text}>
                Total en caja: <span className={styles.cash}>${salesMoney}</span>
            </p>
        </div>
    )
}

export default CashRegister
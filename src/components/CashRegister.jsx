
import { useEffect, useState } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import styles from './CashRegister.module.css'

const CashRegister = () => {

    const { sales } = useAppContext()

    const [salesMoney, setSalesMoney] = useState(0)
    const [manualMoney, setManualMoney] = useState(parseInt(localStorage.getItem('manualMoney')) || 0)
    const [inputValue, setInputValue] = useState('')
    const [totalMoney, setTotalMoney] = useState(salesMoney + manualMoney)


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

    useEffect(() => {
        setTotalMoney(salesMoney + manualMoney)
    }, [salesMoney])

    
    const handleInput = (e) => {
        const value = Math.trunc(e.target.value)
        value ?
            setInputValue(value)
        : value === 0 ?
            setInputValue('') : null
    }

    const handleClickAdd = () => {
        const addMoney = manualMoney + inputValue
        setInputValue('')
        setManualMoney(addMoney)
        setTotalMoney(salesMoney + addMoney)
        localStorage.setItem('manualMoney', addMoney)
    }

    const handleClickSubtrack = () => {
        const subtrackMoney = manualMoney - inputValue
        setInputValue('')
        setManualMoney(subtrackMoney)
        setTotalMoney(salesMoney + subtrackMoney)
        localStorage.setItem('manualMoney', subtrackMoney)
    }


    return (
        <div className={styles.cashRegister}>
            <p className={styles.text}>
                Subtotal de ventas: <span className={styles.cash}>
                    ${salesMoney}
                </span>
            </p>
            <br />

            <div className={styles.manualController}>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={handleInput}
                        placeholder='agregar/retirar dinero...'
                    />
                    <button
                        className={styles.cashRegisterButton}
                        onClick={handleClickAdd}>+</button>
                    <button
                        className={styles.cashRegisterButton}
                        onClick={handleClickSubtrack}>-</button>
                </form>

                <div className={styles.visorMoneyManualControl}>
                    <p className={styles.manualMoneyText}>
                        Modificación manual: <span className={styles.manualMoneyCash}>
                            ${manualMoney}
                        </span>
                    </p>
                </div>
            </div>
            <br />

            <p className={styles.totalMoneyText}>
                TOTAL EN CAJA: <span className={styles.totalMoneyCash}>
                    $ {totalMoney}
                </span>
            </p>
        </div>
    )
}

export default CashRegister
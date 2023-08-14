
import { useState } from "react"
import { OrderContext } from "../contexts/OrderContext"


export const OrderProvider = ({ children }) => {
  
  const [order, setOrder] = useState([])
  const [orderInProcess, setOrderInProcess] = useState(false)
  
  const getSalesLS = () => JSON.parse(localStorage.getItem('sales'))
  const [sales, setSales] = useState(getSalesLS() || [])
  
  const setSalesLS = (salesList) => localStorage.setItem('sales', JSON.stringify(salesList))
  
  const addSale = (order) => {
    const salesList = getSalesLS()
    order.id = salesList.length
    salesList.push(order)
    setSalesLS(salesList)
  }
  
  const addFirstSale = (order) => localStorage.setItem('sales', JSON.stringify([order]))
  
  const updateSales = () => setSales(getSalesLS())
  
  const orderConfirm = (order) => {
    getSalesLS() ? addSale(order) : addFirstSale(order)
    updateSales()
  }
  
  
  

  
  




  return (
    <OrderContext.Provider
      value = {
        {
          order,
          setOrder,
          orderInProcess,
          setOrderInProcess,
          orderConfirm,
          sales,
          updateSales,
        }
      }
    >
      { children }
    </OrderContext.Provider>
  )
}

import { v4 as uuidv4 } from 'uuid'
  
// set sales in local storage
export const setSalesLS = (salesList) => localStorage.setItem('sales', JSON.stringify(salesList))


// get sales in local storage
export const getSalesLS = () => JSON.parse(localStorage.getItem('sales'))




// add sales in local storage
export const addSaleLS = (sale) => {
  const salesList = getSalesLS()
  
  if (salesList) {
    salesList.push(sale)
    setSalesLS(salesList)

  } else setSalesLS([sale])
}

export const addSale = (order) => {
  const sale = {
    id: uuidv4(),
    date: null,
    time: null,
    order,
  }
  addSaleLS(sale)
  return getSalesLS()
}
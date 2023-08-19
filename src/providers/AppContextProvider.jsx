
import { useState } from "react"
import { AppContext } from "../contexts/AppContext"
import { getSalesLS } from '../controllers/salesController'


export const AppContextProvider = ({ children }) => {

  const [order, setOrder] = useState([])
  const [sales, setSales] = useState(getSalesLS() || [])
  const [saleInfoID, setSaleInfoID] = useState(null)
  
  return (
    <AppContext.Provider
      value = {
        {
          order,
          setOrder,
          sales,
          setSales,
          saleInfoID,
          setSaleInfoID
        }
      }
    >
      { children }
    </AppContext.Provider>
  )
}
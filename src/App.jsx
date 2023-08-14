
import styles from './App.module.css'
import { OrderProvider } from './providers/OrderProvider'
import ProductsScreen from './components/ProductsScreen'
import SalesRegister from './components/SalesRegister'

function App() {
  return (
    <OrderProvider>
      <header></header>
      <main className={styles.main}>
        <ProductsScreen />
        <SalesRegister />
      </main>
      <footer></footer>
    </OrderProvider>
  )
}

export default App

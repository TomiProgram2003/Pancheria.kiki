
import styles from './App.module.css'
import { AppContextProvider } from './providers/AppContextProvider'
import ProductsScreen from './components/ProductsScreen'
import SalesRegister from './components/SalesRegister'


function App() {

  return (
    <AppContextProvider>
      <header></header>

      <main className={styles.main}>
        <ProductsScreen />
        <SalesRegister />
      </main>

      <footer></footer>
    </AppContextProvider>
  )
}

export default App

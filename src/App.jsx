
import styles from './App.module.css'
import { AppContextProvider } from './providers/AppContextProvider'
import ProductsScreen from './components/ProductsScreen'
import SalesRegister from './components/SalesRegister'
import SalesInfo from './components/SalesInfo'


function App() {

  return (
    <AppContextProvider>
      <header></header>

      <main className={styles.main}>
        <SalesInfo />
        <ProductsScreen />
        <SalesRegister />
      </main>

      <footer></footer>
    </AppContextProvider>
  )
}

export default App

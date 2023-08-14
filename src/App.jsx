
import styles from './App.module.css'
import ProductsScreen from './components/ProductsScreen'
import SalesRegister from './components/SalesRegister'

function App() {

  return (
    <>
      <header></header>
      <main className={styles.main}>
        <ProductsScreen />
        <SalesRegister />
      </main>
      <footer></footer>
    </>
  )
}

export default App

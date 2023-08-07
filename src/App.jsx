
import styles from './App.module.css'
import ProductsScreen from './components/ProductsScreen'

function App() {

  return (
    <>
      <header></header>
      <main className={styles.main}>
        <ProductsScreen />
      </main>
      <footer></footer>
    </>
  )
}

export default App

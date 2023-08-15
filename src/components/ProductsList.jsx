
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

import styles from './ProductsList.module.css'


const ProductsList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/src/utils/dataProducts.json')
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.log('Error al obtener los productos:', error)
      }
    }
    getProducts()
  }, [])

  return (
    <ul className={styles.list}>
      {
        products.map(
          product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )
      }
    </ul>
  )
}

export default ProductsList
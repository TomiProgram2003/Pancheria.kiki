
const ProductInfo = ({product}) => {
  return (
    <p>
      {product.name} (${product.price}) X{product.quantity} = ${product.price * product.quantity}
    </p>
  )
}

export default ProductInfo
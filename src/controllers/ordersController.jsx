
// ADD PRODUCT TO ORDER
export const addProduct = (product, order) => {

  const newOrder = order.map(_ => _)

  // order in process?
  if (order.length > 0) {
    const existingProduct = order.filter(orderProduct => orderProduct.id == product.id)

    // product already exists?
    if (existingProduct.length > 0) {
      newOrder.forEach((orderProduct, index) => {
        if (orderProduct.id == product.id) newOrder[index].quantity += 1
      })
  
    // product not exists
    } else newOrder.push({...product, quantity: 1})
    
  // start order 
  } else newOrder.push({...product, quantity: 1})

  return newOrder
}


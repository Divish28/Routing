import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function ProductDetail() {
    const params=useParams()
    const productId= params.productId
  return (
    <div>This is Product {productId} Details</div>
  )
}

export default ProductDetail
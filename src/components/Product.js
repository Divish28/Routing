import React from 'react'
import { Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
        <h4>Product 1</h4>
        <h4>Product 2</h4>
        <Outlet/>
    </div>
  )
}

export default Product
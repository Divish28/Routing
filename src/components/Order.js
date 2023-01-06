import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
  const navigate=useNavigate()
  return (
    <div>Order Placed....
    <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}

export default Order
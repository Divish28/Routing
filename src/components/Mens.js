import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Mens() {
  const Navigation=useNavigate()
  return (

    <div>
            {/* <Navbar/> */}
        <div>This is mens page</div>
        <button onClick={()=>Navigation('/Order')}>Place order</button>
    </div>
  )
}

export default Mens
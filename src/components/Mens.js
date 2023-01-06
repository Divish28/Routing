import React from 'react'
import Navbar from './Navbar'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Mens() {
  const navigation=useNavigate()
  return (

    <div>
            {/* <Navbar/> */}
        <div>This is mens page</div>
        <nav>
          <NavLink to={'Shirts'}>Shirts</NavLink>
          <NavLink to={'Pants'}>Pants</NavLink>
        </nav>
        <Outlet/>
        <div><button onClick={()=>navigation('/Order' ,{replace:true})}>Place order</button></div>
    </div>
  )
}

export default Mens
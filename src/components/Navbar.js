import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
    <div>
        <nav>
        <ul id='Navbar' >
                <NavLink to='Home' >Home</NavLink>
                <NavLink to='Mens' >Mens</NavLink>
                <NavLink to='Womens'>Womens</NavLink>
                <NavLink to='Kids'>Kids</NavLink>
                <NavLink to='Login'>Login</NavLink>
                <NavLink to='Profile'>Profile</NavLink>

        </ul>
        </nav>
    </div>
  )
}

export default Navbar
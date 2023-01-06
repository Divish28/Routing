import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Login() {
  return (
    <div>
        <form>
            <div>
                <label id='Login-Emial-Label'>User Name: </label>
                <input id='Login-Email-Input' type={'email'} />
            </div>
            <div>
                <label id='Login-Password-Label'>Password: </label>
                <input id='Login-password-Input'type={'password'} />
            </div>
            <div>
                <button id='Login-Button' >Login</button>
            </div>
        </form>
        <div>
            <Link to={"/Signup"}> New User </Link>
            <Outlet/>
        </div>
    </div>
  )
}

export default Login
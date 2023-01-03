import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <div>
            <form>
                <div>
                    <label id='Signin-Username-Label' >User Name: </label>
                    <input id='Signin-Username-Input' type={'text'} />
                </div>
                <div>
                    <label id='Signin-Email-Label' >Email: </label>
                    <input id='Signin-Email-Input' type={'email'} />
                </div>
                <div>
                    <label id='Signin-Mobile-Label' >Mobile: </label>
                    <input id='Signin-Mobile-Input' type={'text'} />
                </div>
                <div>
                    <label id='Signin-Password-Label' >password: </label>
                    <input id='Signin-Username-Input' type={'password'} />
                </div>
            </form>
        </div>
        <div>
            <Link id="Existing-User" to={"/login"}>Existing User</Link>
        </div>
    </div>
  )
}

export default Signup
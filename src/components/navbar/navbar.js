import React, {useState, useEffect} from 'react'
import history from '../../history'
import './navbar.css'

const Navbar = (props) => {
  return(
    <div>
      <nav>
          <ul>
            <li>
              <a onClick = { () => {history.push('/cart')}}>Cart</a>
            </li>
            <li>
              <a onClick = { () => {history.push('/account')}}>Account</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar

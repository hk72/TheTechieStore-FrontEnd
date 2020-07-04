import React from 'react'
import history from '../../history'


const Navbar = (props) => {
  return(
    <div>
      <nav>
          <ul>
            <li>
              <p onClick = { () => {history.push('/')}}>Browse</p>
            </li>
            <li>
              <p onClick = { () => {history.push('/cart')}}>Cart</p>
            </li>
            <li>
              <p onClick = { () => {history.push('/account')}}>Account</p>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar

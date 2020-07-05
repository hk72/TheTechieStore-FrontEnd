import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'


const Navbar = (props) => {

  const handleLogout = () => {
    fetch('http://localhost:5000/api/user/logout', {
      method: 'POST',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      if(res.message === "Log Out Successful"){
        history.push('/')
        props.setLoggedIn('false')
      }
    })
  }

  return(
    <div>
    {console.log(props.isLoggedIn)}
      <nav>
          <ul>
            <li>
              <p onClick = { () => {history.push('/')}}>Browse</p>
            </li>
            <li>
              <p onClick = { () => {history.push('/cart')}}>Cart</p>
            </li>
              {
                props.isLoggedIn
                ?
                  <li>
                    <p onClick = { () => {history.push('/account')}}>Account</p>
                  </li>
                :
                  null
              }
            <li>
              {
                props.isLoggedIn
                ?
                  <p onClick = { () => handleLogout()}>Logout</p>
                :
                  <p onClick = { () => {history.push('/login')}}>Login</p>
              }
            </li>
          </ul>
        </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = {
  setLoggedIn: data => {
    return { payload: data, type: 'SET_LOGGED_IN',}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

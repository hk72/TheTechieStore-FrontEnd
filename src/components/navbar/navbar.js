import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'


const Navbar = (props) => {

  const handleLogout = () => {
    fetch('https://thetechiestore.herokuapp.com/api/user/logout', {
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
    .catch(err => {
      alert('An Error Has Occured. Please Try Again.')
    })
  }

  return(
    <div className = "navbar1">
      <div className = "w50">
        <div className = 'logoNav'>
          <img onClick = { () => {history.push('/about')}} src = 'TheTechie.jpg' alt = 'img'/>
        </div>
      </div>
      <div className = 'w50 endContent'>
        <p onClick = { () => {history.push('/')}}>Browse</p>
        <p onClick = { () => {history.push('/cart')}}>Cart</p>
        {
          props.isLoggedIn
          ?
            <p onClick = { () => {history.push('/account')}}>Account</p>
          :
            null
        }
        {
          props.isLoggedIn
          ?
            <p onClick = { () => handleLogout()}>Logout</p>
          :
            <p onClick = { () => {history.push('/login')}}>Login</p>
        }
      </div>
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

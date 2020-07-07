import React, {useState} from 'react'
import { connect } from 'react-redux'
import history from '../../history'

const Signup = (props) => {

  const [errors, setErrors] = useState([])

  const handleSignup = (e) => {

    const username = e.target['username'].value.toString()
    const password = e.target['password'].value.toString()

    e.preventDefault()

    if(e.target['password'].value !== e.target['re-password'].value){
      setErrors(['Make Sure Passwords Match'])
    }
    else{
      fetch('https://thetechiestore.herokuapp.com/api/user/signup',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })})
      .then(res => res.json())
      .then(res => {
        if(res.message === 'Internal Server Error'){
          setErrors([
            'Ensure Username is between 8-20 Characters.',
            'Ensure Username does not have Special Characters.'
          ])
        }
        else if(res.message === 'Username Exists'){
          setErrors([
            'Username Taken.'
          ])
        }
        else{
          fetch('https://thetechiestore.herokuapp.com/api/user/login',{
            method: 'POST',
            credentials: 'include',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
            })})
            .then(res => res.json())
            .then(res => {
              if(res.message === 'Auth Successful'){
                props.setLoggedIn('true')
                history.push('/account')
              }
              else{
                setErrors(['Auth Failed.'])
              }
            })
        }
      })
    }
  }

  return(
    <div className="minHeight flexH centerVertically formBackground">
        <div className = "login-box ">
        <form onSubmit = {handleSignup}>
          <h1>Signup</h1>
          {
            errors.length !== 0
            ?
              <div className = "errorBox">
                <h3>Errors</h3>
                  <ul>
                    {errors.map(err => {
                      return <li  className = "liText">{err}</li>
                    })}
                  </ul>
              </div>
            :
            null
          }
            <div className = "inputSpacing">
              <input className = "inputStyle " type="text" placeholder="Username" required="required" name = "username" />
            </div>
            <div className = "inputSpacing">
              <input className = "inputStyle " type="password" placeholder="Password" required="required" name = "password" />
            </div>
            <div className = "inputSpacing">
              <input className = "inputStyle " type="password" placeholder="Re-Enter Password" required="required" name = "re-password" />
            </div>
            <div className = "inputSpacing">
              <button className = "submitStyle " type="submit" >Signup</button>
            </div>
            <div className = "formText displayInline">
              <p>Already have an Account? </p>
              <p className = "pointer" onClick = { () => {history.push('/login')}}>Login.</p>
            </div>
          </form>
        </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLoggedIn: data => {
    return { payload: data, type: 'SET_LOGGED_IN',}
  }
}

export default connect(null, mapDispatchToProps)(Signup)

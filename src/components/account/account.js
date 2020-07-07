import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import history from '../../history'

const Account = (props) => {

  const [usernameErrors, setUsernameErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [deletionErrors, setDeletionErrors] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch('https://thetechiestore.herokuapp.com/api/user/profile', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      if(res.message === "Successful"){
        setUsername(res.username)
      }
      else if(res.message === "Internal Server Error"){
        alert('An Error has Occured. Please Try Again.')
      }
      else if(res.message === "Auth Failed"){
        props.setLoggedIn('false')
        history.push('/login')
      }
    })
    .catch(err => {
      alert('An Error Has Occured. Please Try Again.')
    })
  })

  const handleUsername = (e) => {
    e.preventDefault()

    const username = e.target['username'].value.toString()

    e.target['username'].value = ''

    fetch('https://thetechiestore.herokuapp.com/api/user/updateUsername', {
      method: 'PATCH',
      credentials: 'include',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: username
      })})
      .then(res => res.json())
      .then(res => {
        if(res.message === "Internal Server Error"){
          setUsernameErrors([
            'Ensure Username is between 8-20 Characters.',
            'Ensure Username does not have Special Characters.'
          ])
        }
        else if(res.message === "Username Exists"){
          setUsernameErrors(["Username Exists"])
        }
        else if(res.message === "Auth Failed"){
          props.setLoggedIn('false')
          history.push('/login')
        }
        else{
          setUsername(username)
          alert('Username Updated')
          setUsernameErrors([])
        }
      })
      .catch(err => {
        alert('An Error Has Occured. Please Try Again.')
      })
  }

  const handlePassword = (e) => {
    e.preventDefault()

    const currentPassword = e.target['currentPassword'].value.toString()
    const newPassword = e.target['newPassword'].value.toString()

    if(e.target['newPassword'].value !== e.target['reNewPassword'].value){
      setPasswordErrors(['Make Sure New Passwords Match'])
    }
    else{
      e.target['currentPassword'].value = ''
      e.target['newPassword'].value = ''
      e.target['reNewPassword'].value = ''

      fetch('https://thetechiestore.herokuapp.com/api/user/updatePassword', {
        method: 'PATCH',
        credentials: 'include',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          newPassword: newPassword,
          password: currentPassword
        })})
        .then(res => res.json())
        .then(res => {
          if(res.message === "Password Match Previous Password"){
            setPasswordErrors(['Ensure New Password is not the same as Previous Password'])
          }
          else if(res.message === "Please Check Password"){
            setPasswordErrors(['Ensure Current Password is Correct'])
          }
          else if(res.message === "Internal Server Error"){
            setPasswordErrors(['Internal Server Error'])
          }
          else if(res.message === "Auth Failed"){
            props.setLoggedIn('false')
            history.push('/login')
          }
          else{
            alert('Password Updated')
            setPasswordErrors([])
          }
        })
        .catch(err => {
          alert('An Error Has Occured. Please Try Again.')
        })
    }
  }

  const handleDeletion = (e) => {
    e.preventDefault()

    const password =  e.target['password'].value.toString()

    fetch('https://thetechiestore.herokuapp.com/api/user/delete', {
      method: 'DELETE',
      credentials: 'include',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        password: password
    })})
    .then(res => res.json())
    .then(res => {
      if(res.message === "Check Password"){
        setDeletionErrors(['Ensure Current Password is Correct'])
      }
      else if(res.message === "Auth Failed"){
        props.setLoggedIn('false')
        history.push('/login')
      }
      else if(res.message === "Internal Server Error"){
        setDeletionErrors(['Internal Server Error'])
      }
      else{
        props.setLoggedIn('false')
        setDeletionErrors([])
        history.push('/')
      }
    })
    .catch(err => {
      alert('An Error Has Occured. Please Try Again.')
    })
  }

  return(
    <div className = "minHeight">
      <div style = {{paddingTop: "80px"}}>
        <div className = "accountCard">
          <h2>Username</h2>
          <hr style = {{marginTop: "0rem"}}></hr>
          <form id = "form" onSubmit = {handleUsername}>
            {
              usernameErrors.length !== 0
              ?
                <div>
                  <div className = "errorBox center">
                    <h3>Errors</h3>
                      <ul>
                        {usernameErrors.map((err, index) => {
                          return <li key = {index} className = "liText">{err}</li>
                        })}
                      </ul>
                  </div>
                </div>
              :
              null
            }
            <div className = "inputSpacing center">
              <input className = "inputStyleMax " type="text" placeholder={username} required="required" name = "username" />
            </div>
            <div className = "inputSpacing center">
              <button className = "submitStyleMax " type="submit" >Update</button>
            </div>
          </form>
        </div>
        <div className = "accountCard">
          <h2>Change Password</h2>
          <hr style = {{marginTop: "0rem"}}></hr>
          <form onSubmit = {handlePassword}>
            {
              passwordErrors.length !== 0
              ?
                <div>
                  <div className = "errorBox center">
                    <h3>Errors</h3>
                      <ul>
                        {passwordErrors.map((err, index) => {
                          return <li key = {index} className = "liText">{err}</li>
                        })}
                      </ul>
                  </div>
                </div>
              :
              null
            }
            <div className = "inputSpacing center">
              <input className = "inputStyleMax " type="password" placeholder="Current Password" required="required" name = "currentPassword" />
            </div>
            <div className = "inputSpacing center">
              <input className = "inputStyleMax " type="password" placeholder="New Password" required="required" name = "newPassword" />
            </div>
            <div className = "inputSpacing center">
              <input className = "inputStyleMax " type="password" placeholder="Re-Enter New Password" required="required" name = "reNewPassword" />
            </div>
            <div className = "inputSpacing center">
              <button className = "submitStyleMax " type="submit" >Update</button>
            </div>
          </form>
        </div>
        <div className = "accountCard">
          <h2>Delete Account</h2>
          <hr style = {{marginTop: "0rem"}}></hr>
          <form onSubmit = {handleDeletion}>
            {
              deletionErrors.length !== 0
              ?
                <div>
                  <div className = "errorBox center">
                    <h3>Errors</h3>
                      <ul>
                        {deletionErrors.map((err, index) => {
                          return <li key = {index} className = "liText">{err}</li>
                        })}
                      </ul>
                  </div>
                </div>
              :
              null
            }
            <div className = "inputSpacing center">
              <input className = "inputStyleMax " type="password" placeholder="Password" required="required" name = "password" />
            </div>
            <div className = "inputSpacing center">
              <button className = "submitStyleMax " type="submit" >Delete Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLoggedIn: data => {
    return { payload: data, type: 'SET_LOGGED_IN',}
  }
}

export default connect(null, mapDispatchToProps)(Account)

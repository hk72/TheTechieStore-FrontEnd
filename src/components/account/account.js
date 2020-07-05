import React, {useEffect, useState} from 'react'
import history from '../../history'

const Account = (props) => {

  const [usernameErrors, setUsernameErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const [deletionErrors, setDeletionErrors] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/user/profile', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      if(res.message === "Auth Failed"){
        history.push('/login')
      }
      else{
        setUsername(res.username)
      }
    })
  },[])

  const handleUsername = (e) => {
    e.preventDefault()

    const username = e.target['username'].value

    e.target['username'].value = ''

    fetch('http://localhost:5000/api/user/updateUsername', {
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
        else{
          setUsername(username)
          alert('Username Updated')
          setUsernameErrors([])
        }
      })
  }

  const handlePassword = (e) => {
    e.preventDefault()

    const currentPassword = e.target['currentPassword'].value
    const newPassword = e.target['newPassword'].value
    const reNewPassword = e.target['reNewPassword'].value

    if(e.target['newPassword'].value !== e.target['reNewPassword'].value){
      setPasswordErrors(['Make Sure New Passwords Match'])
    }
    else{
      e.target['currentPassword'].value = ''
      e.target['newPassword'].value = ''
      e.target['reNewPassword'].value = ''

      fetch('http://localhost:5000/api/user/updatePassword', {
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
          else{
            alert('Password Updated')
            setPasswordErrors([])
          }
        })
    }
  }

  const handleDeletion = (e) => {
    e.preventDefault()

    const password =  e.target['password'].value

    fetch('http://localhost:5000/api/user/delete', {
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
      if(res.message === "Auth Failed"){
        setDeletionErrors(['Ensure Current Password is Correct'])
      }
      else if(res.message === "Internal Server Error"){
        setDeletionErrors(['Internal Server Error'])
      }
      else{
        setDeletionErrors([])
        history.push('/')
      }
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
                          {return <li key = {index} className = "liText">{err}</li>}
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
                          {return <li key = {index} className = "liText">{err}</li>}
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
                          {return <li key = {index} className = "liText">{err}</li>}
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

export default Account

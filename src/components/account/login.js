import React, {useState} from 'react'
import history from '../../history'

const Login = (props) => {

  const [errors, setErrors] = useState([])

  const handleLogin = (e) => {
    const username = e.target['username'].value
    const password = e.target['password'].value
    e.preventDefault()
    fetch('http://localhost:5000/api/user/login',{
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
        if(res.message === 'Auth Successful'){
          history.push('/account')
        }
        else{
          setErrors(['Auth Failed.'])
        }
      })
  }

  return(
    <div className="minHeight flexH centerVertically formBackground">
        <div className = "login-box ">
        <form onSubmit = {handleLogin}>
          <h1>Login</h1>
          {
            errors.length !== 0
            ?
              <div>
                <div className = "errorBox">
                  <h3>Errors</h3>
                    <ul>
                      {errors.map((err, index) => {
                        {return <li key = {index} className = "liText">{err}</li>}
                      })}
                    </ul>
                </div>`
              </div>
            :
            null
          }
            <div className = "inputSpacing">
              <input className = "inputStyle " type="text" placeholder="Username" required="required" name = "username" />
            </div>
            <div className = "inputSpacing">
              <input className = "inputStyle " type="password" placeholder="Password" required="required"  name = "password"/>
            </div>
            <div className = "inputSpacing">
              <button className = "submitStyle " type="submit" >Login</button>
            </div>
            <div className = "formText displayInline">
              <p>Do not have an Account? </p>
              <p className = "pointer" onClick = { () => {history.push('/signup')}}>Signup.</p>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login

import React from 'react'

const Login = (props) => {
  return(
    <div className="minHeight flexH centerVertically">
        <div className = "login-box ">
          <h1>Login</h1>
          <div>
            <input type="text" placeholder="Username" required="required" />
          </div>
          <div>
            <input type="password" placeholder="Password" required="required" />
          </div>
          <div>
            <button type="submit" >Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login

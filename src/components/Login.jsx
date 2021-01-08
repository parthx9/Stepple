import { useState } from "react";
import loginImage from "../assets/login-image.svg"
 
const Login = () =>{

  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, pass)
  }

  return(
    <div className=''>
      <div className='login'>
        <div className='row'>
          <div className='col-md-4 login-area' >
            <h1>
              Log In.
            </h1>
            <p>
              Log In with your data you entered <br />
              during your registration
            </p>
            <form className='login-form' onSubmit={handleLogin} >
              <div className='row'>
                <label htmlFor='email'>
                  Enter your email address
                </label>
              </div>
              <input type='text' id='email' onChange={(e)=>setEmail(e.target.value)} ></input>
              <div className='row'>
                <label htmlFor='password'>
                  Enter your password
                </label>
              </div>
              <input type='password' id='password' onChange={(e)=>setPass(e.target.value)} ></input>
              <div className='row'>
                <button 
                  className='login-btn'
                  type='submit'
                  >
                  Log In
                </button>
              </div>
            </form>
            <div className='forgot-pass'>
              <a href='#'>
                Forgot Password?
              </a>
            </div>
          </div>
          <div className='col-md-8 login-right .d-none .d-lg-block .d-xl-none'>
            <p>
              Nice to see you again
            </p>
            <h1>Welcome Back!</h1>
            <img className='login-image' src={loginImage} width='80%' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
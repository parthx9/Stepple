import { useState } from "react";

const Login = () =>{

  const [email, setEmail] = useState(null)
  const [pass, setPass] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, pass)
  }

  return(
    <div className='container'>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <div className='form-group row'>
            <label htmlFor='email' className='col-sm-4 col-form-label' >Email/Username</label>
            <div className='col-sm-8'>
              <input id='email' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='password' className='col-sm-4 col-form-label' >Password</label>
            <div className='col-sm-8'>
              <input id='email' type='password' onChange={(e)=>setPass(e.target.value)}></input>
            </div>
          </div>
          <div className='form-group text-center'>
            <button 
              className='sign-in-btn'
              type='submit'
              >
              Sign In
            </button>
            <button className='forgot-pass-btn'>
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
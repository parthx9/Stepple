import signupImage from '../assets/signup-image.svg'
import { Link } from 'react-router-dom'


const SignUp = () =>{
  return(
    <div className='signup'>
      <div className='row'>
        <div className='col-md-7 p-0 signup-left'>
          <div className=''>
            <h1>Hey, Welcome to Stepple!</h1>
            <img src={signupImage} width='80%' />
          </div>
        </div>
        <div className='col-md-5'>
          <div className='signup-area'>
            <h1>
              Sign Up.
            </h1>
            <p>
              Sign Up to explore our AI <br />
              based job portal
            </p>
            <form className='signup-form'>
              <div className='row'>
                <label htmlFor='firstName'>
                  Enter your first name
                </label>
              </div>
              <input type='text' id='firstName' ></input>
              <div className='row'>
                <label htmlFor='lastName'>
                  Enter your last name
                </label>
              </div>
              <input type='text' id='lastName' ></input>
              <div className='row'>
                <label htmlFor='email'>
                  Enter your email address
                </label>
              </div>
              <input type='text' id='email' ></input>
              <div className='row'>
                <label htmlFor='github-link'>
                  Enter your github link
                </label>
              </div>
              <input type='text' id='github-link' ></input>
              <div className='row'>
                <label htmlFor='password'>
                  Set your password
                </label>
              </div>
              <input type='password' id='password' ></input>
              <div className='row'>
                <label htmlFor='password'>
                  Confirm your password
                </label>
              </div>
              <input type='password' id='password' ></input>
              <div className='row'>
                <button 
                  className='signup-btn'
                  type='submit'
                  >
                  Sign Up
                </button>
              </div>
            </form>
            <p className='have-account'>
              Already have an account?
            </p>
            <div className='login-link'>
              <Link to='/signin'>
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
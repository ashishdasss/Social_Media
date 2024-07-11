import React, { useContext } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/authContext'
// import vedioBg from '../assests/vedioBg.mp4'


export const Login = () => {

  const {login} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleClick = () => {
    login();
    navigate('/');
  }
  return (
    <div className='login'>
      <video className= "vedio"src='https://videos.pexels.com/video-files/1722969/1722969-uhd_2560_1440_25fps.mp4' autoPlay loop muted/>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatem, eveniet sit commodi eaque placeat voluptatum adipisci 
          </p>
          <span>Don't you have an account</span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
          
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password'/>
            <button onClick={handleClick}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Lama Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatem, eveniet sit commodi eaque placeat voluptatum adipisci 
          </p>
          <span>Don't you have an account</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>

        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='email' placeholder='Email'/>
            <input type='passeord' placeholder='Password'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}


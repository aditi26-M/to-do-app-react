import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>  
            <form>
                <h3 className='text-center'>Sign In</h3> 
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type = "email" placeholder = 'Enter your Email' className = 'form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type = "password" placeholder = 'Enter your Password' className = 'form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id="check"></input>
                        <label htmlFor="check" className='custom-input-label ms-2'> Remember Me </label>
                    </div>
                    <div className='d-grid'>
                    <Link to = "/todo" className='ms-2'>
                        <button className='btn btn-primary'>
                            Sign in
                        </button>
                        </Link >
                    

                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href="">Password?</a> <Link to = "/signup" className='ms-2'>Sign up</Link >
                    </p>
            </form>
        </div>  
    </div>
  )
}

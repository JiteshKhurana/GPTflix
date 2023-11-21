import React from 'react'
import Header from './Header'
import {useState} from 'react'

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const toggleSignInForm=()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-img'/>
      </div>
      <form className=' w-3/12 h-3/5 absolute bg-black my-36 p-10 mx-auto left-0 right-0 bg-opacity-90 rounded-lg text-white '>
        <h1 className='text-3xl py-4 m-2 font-bold'>{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-3 my-2 w-full rounded-md bg-gray-700'></input>}
        <input type='text' placeholder='Email Address' className='p-3 my-2 w-full rounded-md bg-gray-700'></input>
        <input type='password' placeholder='Password' className='p-3 my-2 w-full rounded-md bg-gray-700'></input>
        <button className='p-3 mt-6 mb-2 w-full text-white bg-red-600 rounded-md'>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='mt-2 cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSignIn?"New to Netfix? Sign up now.":"Already a User? Sign in"}</p>
      </form>
    </div>
  )
}

export default Login
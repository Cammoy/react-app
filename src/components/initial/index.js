import React from 'react'
import { Link } from 'react-router'
import './style.scss'

const Initial = () => {

  return(
    <div className="initial">
      <h1 className="initial__header">Ruby's Curated Travel App</h1>
      <div className="initial__desc">
        Condimentum nisi pharetra interdum quisque auctor sem a mi bibendum a nisi.
      </div>
      <Link className="initial__btn" to='/login'>Login</Link>
      <Link className="initial__btn" to='/register'>Register</Link>
    </div>
  )
}

export default Initial;

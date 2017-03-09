import React from 'react'
import { Link } from 'react-router'
import './style.scss'

const Initial = () => {

  return(
    <div className="initial">
      <div className="initial__intro center_xy">
        <h1 className="initial__header">Ruby's Curated Travel</h1>
        <div className="initial__desc">
          Condimentum nisi pharetra interdum quisque.
        </div>
        <Link className="initial__btn" to='/login'>Login</Link>
        <Link className="initial__btn" to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Initial;

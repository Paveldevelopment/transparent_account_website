import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/123_bank_logo.png'
import phoneLogo from  '../../img/phone_logo2.png'
import './header.css'

function Header() {
  return (
    <div>
        <div className='header_strip'>
            <div className='text'>
                <img className='phone_logo' src={phoneLogo} alt='image'></img>
                <span className='text_child'>7774 774 774</span>
            </div>
        </div>
        <Link to='/'>
          <img     
              className='bank_logo'
              src={img} alt='image'>
          </img>
        </Link>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png' 
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <Link to="/">
                <button className='logo'>
                    <img src={Logo} alt="" />
                </button>
            </Link>
            <div className='mainlink'>
            <h1 className='title'>Ceasar</h1>
            </div>
        </div>
    </div>
  )
}

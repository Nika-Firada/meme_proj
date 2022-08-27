import React from 'react'
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header'>
        <img className='H_image' src={Logo} alt="logo" />
        <h2 className='H_title'>Meme Generator</h2>
        <h4 className='H_proj'>React Course - Project 3</h4>
    </header>
  )
}

export default Header
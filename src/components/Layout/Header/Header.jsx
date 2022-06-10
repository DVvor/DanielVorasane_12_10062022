import './Header.css'
import React from 'react'

import logo from '../../../assets/logo.png'


function Header() { 
  return (
		<>
      <div className='header'>
        <img alt='logo' className='logo-header' src={logo} />
        <ul className='header-nav'>
          <li className='item-nav-list'>Accueil</li>
          <li className='item-nav-list'>Profil</li>
          <li className='item-nav-list'>Réglage</li>
          <li className='item-nav-list'>Communauté</li>
        </ul>
      </div>
    </>
	)
}

export default Header
import React, { Component } from 'react'

import logo from '../assets/logo.png'
import perfil from '../assets/Perfil.jpg'

function Header() {
    return (
      <header> 
        <nav>
          <img src={logo} id="logofacebook" /> 
          <div>
            <span>Meu perfil</span>
            <img src={perfil} id="perfil" />
          </div>
        </nav>
      </header> 
    )
}

export default Header

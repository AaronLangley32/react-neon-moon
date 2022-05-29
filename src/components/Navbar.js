import React from 'react'
import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarName } from '../CSS/NavbarStyles'
const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarLogo>
          Logo
        </NavbarLogo>
        <NavbarName>
          Neon Moon
        </NavbarName>
        <NavbarLinks>
          Links
        </NavbarLinks>
    </NavbarContainer>
  )
}

export default Navbar
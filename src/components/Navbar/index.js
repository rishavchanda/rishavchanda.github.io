import React from 'react'
import { Nav, NavLink, NavbarContainer,Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
              <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
              </a>
          </NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavItems>
            <NavLink to='about'>About</NavLink>
            <NavLink to='skills'>Skills</NavLink>
            <NavLink to='projects'>Projects</NavLink>
            <NavLink to='contact'>Contact</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href="https://github.com/rishavchanda" target="_blank">Github Profile</GitHubButton>
          </ButtonContainer>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
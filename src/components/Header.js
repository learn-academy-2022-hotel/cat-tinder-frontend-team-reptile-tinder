import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Logo from '../assets/lizard.png'

function Header() {

  return (
    <>
      <Navbar
        className='border-bottom bg-success'
      >
        <NavbarBrand href="/">
          <img
            alt="gecko"
            src={Logo}
            style={{
              height: 60,
              width: 60
            }}
          />
          <NavbarText className='nav-text'>
            Reptile Tinder
          </NavbarText>
      </NavbarBrand>
            <Nav className='ml-auto'>
              <NavItem className='nav-link-text'>
                <NavLink href="/reptileindex/" className='link-dark'>See Our Reptiles</NavLink>
              </NavItem>
              <NavItem className='nav-link-text'>
                <NavLink href="/reptilenew/" className='link-dark'>Create a Profile</NavLink>
              </NavItem>
            </Nav>
      </Navbar>
    </>
  );
}

export default Header;
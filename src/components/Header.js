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
import Logo from '../assets/hotel.jpg'

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
              height: 40,
              width: 80
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
import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownTeam from './DropdownTeam';
import {NavbarBrand} from 'reactstrap'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownTeam, setDropdownTeam] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onJoinMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdownTeam(false);
    } else {
      setDropdownTeam(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const onJoinMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdownTeam(false);
    } else {
      setDropdownTeam(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <NavbarBrand>
            <img src='assets/images/logo.png' height="160px" width="128px" alt="upward"/>
          </NavbarBrand>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Team
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onJoinMouseEnter}
            onMouseLeave={onJoinMouseLeave}
          >
            <Link
              to='/join-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Join Us <i className='fas fa-caret-down' />
            </Link>
            {dropdownTeam && <DropdownTeam/>}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
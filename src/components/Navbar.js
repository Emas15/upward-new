import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import Dropdown from './Dropdown';
import DropdownTeam from './DropdownTeam';

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
      <nav className='Navbar'>
        <Link to='/' className='Navbar-logo' onClick={closeMobileMenu}>
            <img src='assets/images/logo.png' height="160px" width="128px" alt="upward"/>
        </Link>
        <div className='Menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
          <li className='Nav-item'>
            <Link to='/' className='Nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='Nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about-us'
              className='Nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='Nav-item'>
            <Link
              to='/team'
              className='Nav-links'
              onClick={closeMobileMenu}
            >
              Team
            </Link>
          </li>
          <li
            className='Nav-item'
            onMouseEnter={onJoinMouseEnter}
            onMouseLeave={onJoinMouseLeave}
          >
            <Link
              to='/join-us'
              className='Nav-links'
              onClick={closeMobileMenu}
            >
              Join Us <i className='fas fa-caret-down' />
            </Link>
            {dropdownTeam && <DropdownTeam/>}
          </li>
          <li className='Nav-item'>
            <Link
              to='/contact-us'
              className='Nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='Nav-links-mobile'
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
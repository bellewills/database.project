import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import CSS for the navbar
import { Button } from './button'; // Adjusted import path for Button component

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            Belle <i className='fab fa-typo3' />
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
            <li className='nav-item'>
              <Link to='/europe' className='nav-links' onClick={closeMobileMenu}>
                Europe
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/asia' className='nav-links' onClick={closeMobileMenu}>
                Asia
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/africa' className='nav-links' onClick={closeMobileMenu}>
                Africa
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/north-america' className='nav-links' onClick={closeMobileMenu}>
                North America
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/south-america' className='nav-links' onClick={closeMobileMenu}>
                South America
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/australia' className='nav-links' onClick={closeMobileMenu}>
                Australia
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

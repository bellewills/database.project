import React, { useState } from 'react';
import { Link } from 'react-router-DOM';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

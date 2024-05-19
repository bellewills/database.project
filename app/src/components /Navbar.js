import React from 'react';
import { Link } from 'react-route-dom';

function Navbar() {
  const [click, setCLick] = useState(false);

  const handleClick = () => setCLick=(!click);
  const CloseMobileMenu = () => setCLick(false);




  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
          Belle <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={(handleClick)}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='av-item'> 
            <Link to='/' className='nav-links' onClink={CloseMobileMenu}>
              Home
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

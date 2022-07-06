import React from 'react';
import { images } from '../../constants';
import  './Navbar.scss';
const Navbar = () => {
  return (
    <nav className='app__navbar'>

      <div className='logo'>
        <img src= {images.logo} alt="logo" />
      </div>

      <ul className='app__links'>
        {['Product', 'Template', 'Blog' ,'Pricing'].map((itemLink) => (
          <li
          key={`link-${itemLink}`}  
          >
            <div/>
          <a href={`#${itemLink}`}>{itemLink}</a> 
          </li>
        ))}

      </ul>
      <div className='navButtons'>
        <span className='navButtons-signin'>Sign In</span> 
        <button>Start Free</button>

      </div>

    </nav>
  );
}

export default Navbar;
import React, {useState, useEffect} from 'react';
import { images } from '../../constants';
import {CgMenuLeft , CgCloseR} from 'react-icons/cg';
import { motion } from 'framer-motion';
import  './Navbar.scss';
const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className='app__navbar'>
   <div className='mobile-menu'>
   <CgMenuLeft className='toggleIcon' onClick={ ()=> settoggle(true)}   />
     
     {toggle && ( /* if the state === true open up mobile menu*/
      <motion.div
      whileInView={{x:[300 , 0]}}
      transition = {{duration :0.85, ease:'easeOut'}}
      >
     <CgCloseR className='menu-close'onClick={ () => settoggle(false)} />
     <ul>
      {['Product', 'Template', 'Blog', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => settoggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
      </motion.div>
     )}
     </div>
      <div className='logo'>
        <img src= {images.logo} alt="logo" />
      </div>
       <div className='get-started-button'>
        <button>Get Started</button>

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
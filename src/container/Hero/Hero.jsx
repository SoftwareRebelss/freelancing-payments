import React from 'react'
import { images } from '../../constants';
import './Hero.scss';
const Hero = () => {
  return (
    <div className='header'>
    <img src={images.heroImage} alt="header-background" />
    </div>
  );
}

export default Hero;
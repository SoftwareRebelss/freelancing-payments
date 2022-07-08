import React from 'react'
import { images } from '../../constants';
import './Hero.scss';


const productImages = [images.sumsung, images.OpenZepp, images.Oracle, images.morphesus, images.monday, images.segement , images.pronet]
const Hero = () => {

  return (
    
    <>
    
      <div className='header'>

<div className='hero-image' style={{  
backgroundImage: `url(${images.heroImage})`,
width: "100%",
height: "100vh",
backgroundRepeat: 'no-repeat'
}}>
<div className='freelence-payments-manage'>
<div className="upwork"><img src={images.upwork} alt="upworkimage" /></div>

<div className="hero-text-container">

<div className="toptal"><img src={images.toptal} alt="topatalimage" /></div>

<div className='h-text'>
<h2>Managing Freelance Payments <br></br> Has Never Been Easier</h2>
</div>

<div className='p-text'>
  <p>End-to-end payments and financial management in a <br></br> single solution. Meet the right platform to help realize.</p>
</div>
<div className='hero-buttons'>
  <button className='get-started'>Get Started</button>
  <button className='demo'>Request Demo</button>
</div>

</div>

<div className="freelencer"><img src={images.freelencer} alt="freelencer" /></div>

</div>

</div>
  
  </div>
  <div className="companies">
    <p className='company-header'>
    Over 32k+ software businesses growing with Ar Shakir.
    </p>
    <div className='comapny-images'>
    {productImages.map((itemImage ) => ( 
      <img className='small-image' src={itemImage} alt="small-images"
      
      />
    ))}
   </div>
  </div>

    </>
  );
}

export default Hero;
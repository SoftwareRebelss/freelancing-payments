import React from 'react';
import { images } from '../../constants';
import './Choose.scss';

const Choose = () => {
  return (
    <div className='choose-us'>

 <div className='choose-finacy'>
  <h4>Why Financy</h4>
 </div>
 <div className='h-text-finance'>
 <h2>Specially Designed For <br></br> Payments</h2>
 </div>
 <div className="cards">

  <div className="moderm-cards">

    <img className='img-one'  src={images.modern} alt="logo" />
    <div className='small-h-ext'>
      <h4>Modern Cards</h4>
    </div>
    <p className='small-p-ext'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
  </div>

  <div className="moderm-cards">
    <span><img className='img-two' src={images.extra} alt="logo" /></span>
    <div className='small-h-ext'>
      <h4>No Extra Fee</h4>
    </div>
    <p className='small-p-ext'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
  </div>

  <div className="moderm-cards">
    <span><img className='img-t'  src={images.secure} alt="logo" /></span>
    <div className='small-h-ext'>
      <h4>Super Secure</h4>
    </div>
    <p className='small-p-ext'>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
  </div>
 </div>

<div className="choose-us-second-section">

    </div>
<div className='choose-us-third-section'>

<div className="choose-us-flex-one">
<h4 className='choose-third' >Why Choose Us</h4>
<div className='h-text-third'>
<h2>Track your crytpo
portfolio on the
best way possible</h2>
</div>


<p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
<span>
  
  
 
  <img className='img-one-b' src={images.workingprocess} alt="logo" />
  <div>
  <h2>First Working Process</h2>
  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
  </div>
</span>

<span>
 
  
  
  <img className='img-two-b' src={images.team} alt="logo" />
  <div>
  <h2>First Working Process</h2>
  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
  </div>
 
</span>

<span>
  
  
  
  <img className='img-t-b' src={images.support} alt="logo" />
  <div>
  <h2>First Working Process</h2>
  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
  </div>
</span>
  </div>
  <div className='choose-us-flex-two'>

<img src={images.digitalService} alt="digitalService" />


  </div>

</div>



    </div>
  );
}

export default Choose;
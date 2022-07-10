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

<div className="transfers">

<img src={images.quicktransfer} alt="" />
<div>
<input type="text" />
<button>Send</button>
</div>

  </div>
  

  <div className="crypto-portfolio">
  <h4 className='choose-second' >Why Choose Us</h4>

  <div className='h-text-second'>
 <h2>Track your crytpo
portfolio on the
best way possible</h2>

<p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>

<img src={images.Line} alt="line-logo" />
<div className="list-items">
<span>
  <img src={images.tick} alt="" />
  <p>Get Overview at a glance</p>
</span>
<span>
  <img src={images.tick} alt="" />
  <p>Deoposit funds easily, securlity</p>
</span>
<span>
  <img src={images.tick} alt="" />
  <p>Get Overview at a glance</p>
</span>
</div>
 </div>
  </div>

    
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
  
  <h2>First Working Process</h2>
  <div>
  <img className='img-one-b' src={images.workingprocess} alt="logo" />
  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
  </div>
</span>

<span>
 
  <h2>First Working Process</h2>
  <div>
  <img className='img-two-b' src={images.team} alt="logo" />
  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
  </div>
 
</span>

<span>
  
  <h2>First Working Process</h2>
  <div>
  <img className='img-t-b' src={images.support} alt="logo" />
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
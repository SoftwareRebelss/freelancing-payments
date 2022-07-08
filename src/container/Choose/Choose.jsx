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
    </div>
  );
}

export default Choose;
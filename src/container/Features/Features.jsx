import React from 'react';
import { images } from '../../constants';
import './features.scss';

const Features = () => {
  return (
    <div className='features-section'>

     <div className='h-text'>
     <h2 >Features that blows mind</h2>
     <p>End-to-end payments and financial management in a <br></br> single solution. Meet the right platform to help realize.</p>
    </div> 
   
  
   <div className="features-flex-box">

    <div className="flex-box-one">
      <img src={images.FolderIcon} alt="icon" />
      <h2>Connect wallets & exchanges</h2>
      <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
    </div>

    <div className="flex-box-one">
      <img src={images.FolderIcon} alt="icon" />
      <h2>Connect wallets & exchanges</h2>
      <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
    </div>

    <div className="flex-box-two">
      <div className="save-money">
      <h2>Connect wallets & exchanges</h2>
      </div>

      <div className="save-money">
      <h2>100+ Apps Powerful
          integrations</h2>
      </div>
    </div>

   </div>
</div>

    
  );
}

export default Features;
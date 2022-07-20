import React from 'react';
import { images } from '../../constants';
import './form.scss';

const Form = () => {
  return (
    <div className='form-container'  style={{  
      backgroundImage: `url(${images.FooterForm})`,
      width: "100%",
      height: "400px",
      backgroundRepeat: 'no-repeat'
      }}>
      <div className="form-text">
        <h2>
        We are here to help <br></br> you grow your <br></br> business
        </h2>
      </div>

      <div className="form-container">
        <form action="">
          <span>
          <label>NAME:</label>
          <input type="text" />
          </span>

          <span>
          <label>EMAIL:</label>
          <input type="email" />
          </span>

          <span>
          <label>PASSWORD:</label>
          <input type="password" />
          </span>
          

          <span>
         <button>Sign Up</button>
          </span>
        </form>
      </div>
      
    </div>
  );
}

export default Form;
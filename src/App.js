import React from 'react'
import {Choose, Features, Footer, Form, Hero, Management, Navbar } from './container';

import './App.scss';

const App = () => {
  return (
    <div className='App__container'>

       <Navbar/>
       <Hero/>
       <Features/>
       <Choose/>
       <Management/>
       <Form/>
       <Footer/>

    </div> 
  );
}

export default App;
import React from 'react'
import {Choose, Features, Footer, Form, Hero, Management, Navbar } from './container';

import './App.scss';

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='App__container'>
       
       <Features/>
       <Choose/>
       <Management/>
       <Form/>
       <Footer/>
    </div> 
    </>
    
  );
}

export default App;
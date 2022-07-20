import React from 'react'
import {Choose, Features, Footer, Form, Hero, Management, Navbar } from './container';

import './App.scss';

const App = () => {
  return (

    <>
    <Navbar/>
    <Hero/>
    <Choose className='App__container' />
    { /*
      {<Hero/>
      <Choose className='App__container' />
      <Features className='App__container'/>
      <Form/>
      <Management className='App__container'/>
      <Footer className='App__container'/>}
  */}
   
      
      
   
    </>
    
  );
}

export default App;
import React from 'react'
import Navbar from "./Componants/Navbar";
import Header from "./Componants/Header"; 
import Feature from "./Componants/Feature"; 
import Offer from "./Componants/Offer"; 
import About from "./Componants/About"; 
import Contact from "./Componants/Contact"; 

const App = () => {
  return (
    <div className='App'>
      <Navbar />;
      <Header />;
      <Feature />;
      <Offer />;
      <About />;
      <Contact />;
    </div>
  );
}

export default App

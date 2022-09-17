import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navber } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navber />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
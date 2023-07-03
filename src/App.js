import React from 'react';
import { About, Education, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from './components';
import "./App.scss";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
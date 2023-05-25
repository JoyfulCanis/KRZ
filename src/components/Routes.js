import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';
import About from '../pages/About';


const Routing = () => {
  return (
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
  );
};

export default Routing;
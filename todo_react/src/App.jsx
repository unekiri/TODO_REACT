import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home }  from './components/Home';
import { Incomplete } from './components/Incomplete';
import { Complete } from './components/Complete';
import { Add_text } from './components/Add_text';

import './stylesheets/style.css';

export const  App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/incomplete" element={<Incomplete />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/add_text" element={<Add_text />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
};
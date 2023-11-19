import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home }  from './components/Home';
import { Incomplete } from './components/Incomplete';
import { Complete } from './components/Complete';
import './stylesheets/style.css';

export const  App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/incomplete" element={<Incomplete />} />
          <Route path="/complete" element={<Complete />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
};
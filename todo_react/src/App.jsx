import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home }  from './components/Home';
import { Incomplete } from './components/Incomplete';
import { Complete } from './components/Complete';
import { Addtext } from './components/Addtext';
import { Incomplete_Edit } from './components/Incomplete_Edit';
import { Complete_Edit } from './components/Complete_Edit';

import './stylesheets/style.css';

export const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/incomplete" element={<Incomplete />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/addtext" element={<Addtext />} />
        <Route path="/incomplete_edit" element={<Incomplete_Edit />} />
        <Route path="/complete_edit" element={<Complete_Edit />} />
      </Routes> 
    </BrowserRouter>
  );
};
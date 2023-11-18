import React, { useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home }  from './components/Home';
import './stylesheets/style.css';

export const  App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
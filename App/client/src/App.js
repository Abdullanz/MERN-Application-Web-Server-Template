//==============================================================================================================
// FileName: App.js
// Date: 12 March, 2021
// Description: This file contains the initial connection between the backend and the frontend
// Author: Abdullah Najjar
//==============================================================================================================

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/product';
import About from './pages/about';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
} 
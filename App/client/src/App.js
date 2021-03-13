//==============================================================================================================
// FileName: App.js
// Date: 12 March, 2021
// Description: This file contains the initial connection between the backend and the frontend
// Author: Abdullah Najjar
//==============================================================================================================

import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Car from './pages/car';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/car" component={Car} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
} 
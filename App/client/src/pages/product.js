//==============================================================================================================
// FileName: car.js
// Date: 13 March, 2021
// Description: This page contains the magic object for the application
// Author: Abdullah Najjar
//==============================================================================================================

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Product extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h2>Hi, I am your product a Car!</h2>
        <Footer/>
      </div>
      )
  };
};

export default Product;
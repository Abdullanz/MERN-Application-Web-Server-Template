//==============================================================================================================
// FileName: about.js
// Date: 28 March, 2021
// Description: This file contains the about the about page for this sample project
// Author: Abdullah Najjar
//==============================================================================================================

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h2>Welcome to our About page!</h2>
        <Footer/>
      </div>
      )
  };
};

export default About;
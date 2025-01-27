//==============================================================================================================
// FileName: Home.js
// Date: 12 March, 2021
// Description: This file contains the Landing page 
// Author: Abdullah Najjar
//==============================================================================================================

import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class Home extends Component {

  //This state 
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };


  //Call this after rendering the client side
  componentDidMount()
  {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  //This function
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  //This function is to show
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/IndexAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
  return (
        <div>
          <Header/>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
          <Footer/>
      </div>
  );
}}

export default Home;
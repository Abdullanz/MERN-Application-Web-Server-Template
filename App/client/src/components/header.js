//==============================================================================================================
// FileName: header.js
// Date: 13 March, 2021
// Description: This component contains the header for the application
// Author: Abdullah Najjar
//==============================================================================================================

import React from "react";
import { Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <div>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">
      Sample Project
    </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/products">Products</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
        </div>
    );
};

export default Header;
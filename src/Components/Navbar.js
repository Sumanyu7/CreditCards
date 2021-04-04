import React, { Component } from "react";
import Logo from "../logo.png";
import { Navbar, Nav } from 'react-bootstrap';



class navbar extends Component {
  render() {
    return (
        <Navbar className="navbar" fixed="top">
            <Navbar.Brand href="/">
            <img
                src={Logo}
                width="100"
                height="60"      
                className="d-inline-block align-top"
                alt="Credit Crads Logo"
            />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/saved">Saved Cards</Nav.Link>
            </Nav>
      </Navbar>
    );
  }
}

export default navbar;
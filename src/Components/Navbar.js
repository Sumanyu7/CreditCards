import React, { Component } from "react";
import Logo from "../logo.png";
import { Navbar, Nav } from 'react-bootstrap';



class navbar extends Component {
  render() {
    return (
        <Navbar className="navbar" fixed="top" bg="dark">
            <Navbar.Brand href="/">
            <img
                src={Logo}
                width="80"
                height="50"      
                className="d-inline-block align-top"
                alt="Credit Crads Logo"
            />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link className="text-white" href="/saved">Saved Cards</Nav.Link>
            </Nav>
      </Navbar>
    );
  }
}

export default navbar;
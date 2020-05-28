import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="">
        <img src={logo} className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Jacob Stanger</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
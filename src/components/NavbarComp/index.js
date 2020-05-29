import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

export default function NavbarComp() {
  return (
    <div className="container-fluid">
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
    </div>
  );
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bulma/css/bulma.css';
import './index.css';

export default function NavbarComp() {
  return (
    <div className="container-fluid">
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Brand href="/">Jacob Stanger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}